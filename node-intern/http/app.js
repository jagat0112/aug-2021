const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    fs.readFile("./view/index.html", "utf8", (err, data) => {
      if (err) console.log(err);
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;

    fs.readFile("./view/notFound.html", null, (err, data) => {
      if (err) console.log(err);
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000, console.log("server started"));
