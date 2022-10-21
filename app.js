require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const port = process.env.PORT || 3001;
const empRouter = require("./routes/emproutes");
const mongoose = require("mongoose");
// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });
// console.log("first", process.env.DATABASE);
const connect = async () => {
  const dd = await mongoose.connect(
    "mongodb+srv://Aman:aman1234@cluster0.4v19a.mongodb.net/booking?retryWrites=true"
    // process.env.DATABASE
  );
  if (!dd) {
    console.log("error");
  } else {
    console.log("connected to database");
  }
};
connect();

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use("/", router);
app.use("/emp", empRouter);

app.listen(port, () => {
  console.log(`server start at port no : ${port}`);
});
