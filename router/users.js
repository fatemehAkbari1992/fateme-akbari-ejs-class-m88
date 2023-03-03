const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const users = require("../db/users-data.json");

// read products
router.get("/user", (req, res) => {
  res.render("pages/home", { data: users });
});

module.exports = router;
