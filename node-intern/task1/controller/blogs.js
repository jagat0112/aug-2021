const Blog = require("../model/Blogs");

const addBlog = async (req, res) => {
  try {
    const { blog } = req.body;
    await Blog.create({ name: blog });
    res.redirect("/blogs");
  } catch (error) {
    console.log(error);
  }
};

const getBlog = async (req, res) => {
  const blogs = await Blog.find();
  res.render("blogs", { blogs });
};
module.exports = { addBlog, getBlog };
