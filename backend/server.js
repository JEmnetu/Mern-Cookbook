const express = require("express");
const PORT = process.env.PORT || 5001;
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db.js");

connectDB();

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT} `);
});
