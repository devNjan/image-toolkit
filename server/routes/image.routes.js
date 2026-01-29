const express = require("express");
const { uploadSingleImage } = require("../middlewares/upload.middleware");

const router = express.Router();

router.post("/upload-test", uploadSingleImage, (req, res) => {
  res.json({
    filename: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

module.exports = router;
