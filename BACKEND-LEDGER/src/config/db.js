const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Server is connected to database");
    })
    .catch((error) => {
      console.log("Error connecting to DB:", error);
      process.exit(1);
    });
}

module.exports = connectDB;
