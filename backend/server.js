require("dotenv").config();

const express = require("express");
const connectDB = require("./config/config");
const { errorhandler } = require("./middleware/errormiddleware");
const mongoose = require("mongoose");

connectDB();

const app = express();

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to DB"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const adminRouter = require("./routes/admin");
app.use("/admin", adminRouter);

app.use(errorhandler);

app.listen(3000, () => console.log("server listening to the port"));
