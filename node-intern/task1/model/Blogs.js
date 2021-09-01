const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = mongoose.model(
  "Blog",
  new Schema({
    blog: { type: String, require: true },
  })
);
