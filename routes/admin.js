const path = require("path");
const express = require("express");
const router = express.Router();

// Admin/add-product => Get
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// Admin/add-product => Post
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
