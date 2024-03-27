const express = require("express");
const { StatusCodes } = require("http-status-codes");
const FeedRouter = require("./routers/feed.router");
const path = require("node:path");
require("dotenv").config();
require("./db");

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", function (req, res, next) {
  res.status(StatusCodes.OK).json({ msg: "feed app server up!" });
});

app.use("/feed", FeedRouter);

app.listen(process.env.PORT, function () {
  console.log(
    `[server]: feed app server is listening on http://localhost:${process.env.PORT}`
  );
});
