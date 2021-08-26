const express = require("express");
// const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const names = ["jagat", "bibendra", "kiwahang"];
  res.render("index", { name: "Jagat", names });
  res.end();
});

app.listen(3002, console.log("Server Started at 3002"));
