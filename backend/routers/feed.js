const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(function (req, res, next) {})
  .post(function (req, res, next) {});

export default router;
