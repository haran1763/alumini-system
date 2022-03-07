const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = mongoose.connect(`${process.env.MONGODB_URL}`, {
      useNewUrlparser: true,
    });
  } catch {}
};

module.exports = connectDB;
