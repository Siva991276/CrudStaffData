const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

const StaffData = require("./Router/StaffRouter");

const app = express();
const PORT = process.env.port || 3200;
app.use(cors());
app.use(bodyparser.json());
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://badasiva22:Siva991276@cluster0.iis7lrd.mongodb.net/Staff?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  return res.send("Hello World!!");
});

app.use("/Staff", StaffData);
app.listen(PORT, () => {
  console.log(`Server Running At Port Is ${PORT}`);
});
