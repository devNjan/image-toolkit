const express = require("express");

const router = express.Router();

router.post("/upload-test", (req, res) => {
  res.json({ message: "Upload route works" });
});

module.exports = router;
