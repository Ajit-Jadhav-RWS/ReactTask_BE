const express = require("express");
const app = express();
const router = require("./router/router");
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/user", router);
module.exports = app;
