const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://intern:Pradhan0112@cluster0.njbej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Mongoose Connected...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
