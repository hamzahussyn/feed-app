const express = require("express");
const { body, validationResult } = require("express-validator");
const { upload } = require("../multer");
const path = require("path");
const Feed = require("../models/feed.model");

const router = express.Router();

router.post(
  "/",
  [
    upload.array("images"), 
    body("text").notEmpty().withMessage("Text content is required"),
  ],
  async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const imageFilenames = req.files.map((file) => file.filename);

      const newFeedItem = new Feed({
        text: req.body.text,
        images: imageFilenames, 
      });

      const savedFeedItem = await newFeedItem.save();

      res.status(201).json(savedFeedItem);
    } catch (error) {
      console.error("Error creating feed item:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.get("/", async function (req, res, next) {
  try {
    const feedItems = await Feed.find().sort({ createdAt: -1 });

    res.json(feedItems);
  } catch (error) {
    console.error("Error retrieving feed items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
