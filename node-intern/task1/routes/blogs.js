const express = require("express");
const { addBlog, getBlog } = require("../controller/blogs");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/blogs", getBlog);

router.post("/", addBlog);

module.exports = router;
