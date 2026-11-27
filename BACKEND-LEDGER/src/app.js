const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());

/**
 * - Routes required
 */

const authRouter = require('./routes/auth.routes');
const accountRouter = require('./routes/accounts.routes');
const transactionRoutes = require('./routes/transaction.routes');

/**
 * - Use Routes
 */

app.use('/api/auth', authRouter)
app.use('/api/accounts', accountRouter)
app.use('/api/transaction',transactionRoutes);

module.exports = app;