const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = mongoose.connect(`mongodb+srv://haran1763:8012884138@cluster0.4gffo.mongodb.net/alumini-DB?retryWrites=true&w=majority`, {
      useNewUrlparser: true,
    });
  } catch {}
};

module.exports = connectDB;
