const express = require("express");
const { StatusCodes } = require("http-status-codes");
require("dotenv").config();

const app = express();

app.get("/", function (req, res, next) {
  res.status(StatusCodes.OK).json({ msg: "feed app server up!" });
});

app.listen(process.env.PORT, function () {
  console.log(
    `[server]: feed app server is listening on http://localhost:${process.env.PORT}`
  );
});
