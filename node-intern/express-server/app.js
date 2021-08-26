const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/about.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./view/notFound.html"));
  next();
});

app.listen(3000, console.log("server started at 3000"));
