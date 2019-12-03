const http = require("http");
const routes = require("./routes");
const express = require("express");
const app = express();

//Adding Middleware
app.use((req, res, next) => {
  console.log("in the middleware");
  next()
});
app.use((req, res, next) => {
    console.log("in the middleware ii");
     res.send('<h1>Hello, world from express</h1>')
  });

const server = http.createServer(app);
server.listen(3001);
