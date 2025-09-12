const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Server running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection Error", err);
  });
