import express from "express";
const bodyParser = require("body-parser");
//Other require routes when exist
const productsRoute = require("./routes/products");


const server = express();
server.use(bodyParser.json());
server.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
server.use("/products", productsRoute);


server.use((err: any, _req: any, res: any, _next: any) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });


module.exports = server;