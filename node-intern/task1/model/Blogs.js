const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
});
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
