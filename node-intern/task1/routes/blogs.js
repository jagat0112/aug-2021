const express = require("express");
const Blog = require("../model/Blogs");

const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  console.log(blogs);
  res.render("index");
});

router.post("/", async (req, res) => {
  try {
    const blog = JSON.stringify(req.body);
    console.log(blog);
    const newBlog = await Blog.create({ blog: blog.blog });
    console.log(newBlog);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
