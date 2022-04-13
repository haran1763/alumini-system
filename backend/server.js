require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/config");

const { errorhandler } = require("./middleware/errormiddleware");
const mongoose = require("mongoose");

connectDB();

const app = express();

app.use(cors());

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to DB"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const userRouter = require("./routes/Users");
app.use("/", userRouter);
const Dashboard = require("./routes/Dashboard");
app.use("/Admin", Dashboard);

app.use(errorhandler);

app.listen(5000, () => console.log("server listening to the port"));
