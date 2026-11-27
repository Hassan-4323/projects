const transactionModel = require("../models/transaction.model");
const ledgerModel = require("../models/ledger.model");
const accountModel = require("../models/account.model");
const emailService = require("../services/email.service");
const mongoose = require('mongoose');

/**
 * - Create new transaction
 * THE 10 STEP TRANSFER FLOW:
 * 1. Validate Request
 * 2. Validate Idempotency Key
 * 3. Check account status
 * 4. Derive sender balance from ledger
 * 5. Create transaction (PENDING)
 * 6. Create DEBIT ledger entry
 * 7. Create CREDIT ledger entry
 * 8. Mark transaction completed
 * 9. Connect mongoDB session
 * 10. Send email notification
 */

async function createTransaction(req, res) {

    /**
     * 1. Validate Request
     */

  const { fromAccount, toAccount, amount, idemPotencyKey } = req.body;

  if (!fromAccount || !toAccount || !amount || !idemPotencyKey) {
    return res.status(400).json({
      message: "fromAccount, toAccount, amount and idemPotencyKey are required",
    });
  }

  const fromUserAccount = await accountModel.findOne({
    _id: fromAccount,
  });

  const toUserAccount = await accountModel.findOne({
    _id: toAccount,
  });

  if (!fromUserAccount || !toUserAccount) {
    return res.status(400).json({
      message: "Invalid formUserAccount or toAccount",
    });
  }

  /**
   * Validate Idempotency Key
   */

  const isTransactionAlreadyExists = await transactionModel.findOne({
    idemPotencyKey : idemPotencyKey
  })

  if(isTransactionAlreadyExists){
    if(isTransactionAlreadyExists.status == "COMPLETED"){
        return res.status(200).json({
            message : "Transaction already Processed",
            transaction: isTransactionAlreadyExists
        })
    }

    if(isTransactionAlreadyExists.status == "PENDING"){
        return res.status(200).json({
            message : "Transaction is still in Process",
            transaction: isTransactionAlreadyExists
        })
    }

    if(isTransactionAlreadyExists.status == "FAILED"){
        return res.status(500).json({
            message : "Transaction Processing failed, Please try again",
        })
    }

    if(isTransactionAlreadyExists.status == "REVERSED"){
        return res.status(500).json({
            message : "Transaction was Reversed, Please try again",
        })
    }
  }

  /**
   * 3. Check Account Status
   */

  if(fromUserAccount.status !== "ACTIVE" || toUserAccount !== "ACTIVE"){
    return res.status(400).json({
        message : "Both fromAccount and toAccount must be ACTIVE to process a transaction"
    })
  }

  /**
   * 4. Derive sender balance from Ledger
   */

  const balance = await fromUserAccount.getBalance()

  if(balance < amount){
    return res.status(400).json({
        message : `Insufficient balance. Current balance is ${balance}. Requested balance is ${amount}`
    })
  }

  /**
   * Create Transaction (PENDING)
   */

  const session = await mongoose.startSession();
  // This part is provided by the mongoDB means ya to step 5 to step 8 sub complete hongy ya aik bi nahi
  session.startTransaction();

  const transaction = await transactionModel.create({
    fromAccount,
    toAccount,
    amount,
    idempotencykey,
    status : PENDING
  }, {session})

  const debitLedgerEntry = await ledgerModel.create({
    account : fromAccount,
    amount : amount,
    transaction : transaction._id,
    type : "DEBIT"
  },{session})

  const creditLedgerEntry = await ledgerModel.create({
    account : "CREDIT",
    amount : amount,
    transaction : transaction._id,
    type : "CREDIT"
  },{session})

  transaction.status = "COMPLETED"
  await transaction.save({session})

  await session.commitTransaction()
  session.endSession()

  /**
   * 10 - Send email Notificaiton
   */

  await emailService.sendTransactionEmail(req.user.email, req.user.name, amount, toAccount)

  res.status(201).json({
    message : "Transaction completed successfully",
    transaction : transaction
  })

}

async function createInitialFundsTransaction(req,res){
  const {toAccount, amount, idemPotencyKey} = req.body

  if(!toAccount || !amount || !idemPotencyKey){
    return res.status(400).json({
      message : "toAccount, amount and idemPotencyKey are required"
    })

    const toUserAccount = await accountModel.findOne({
      _id : toAccount
    })

    if(!toUserAccount){
      return res.status(400).json({
      message : "Invalid toAccount"
    })
  }
const fromUserAccount = await accountModel.findOne({
      systemUser : true,
      user : req.user._id
    })

    if(!fromUserAccount){
      return res.status(400).json({
      message : "System user not found"
    })
  }
}

module.exports = {createTransaction}