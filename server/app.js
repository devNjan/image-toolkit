const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const imageRoutes = require("./routes/image.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.use("/api", imageRoutes);

module.exports = app;
