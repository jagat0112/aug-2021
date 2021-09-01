const express = require("express");
const blogs = require("./routes/blogs");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

app.set("view engine", "ejs");

app.use("/", blogs);

app.listen(3000, console.log("Server Started"));
