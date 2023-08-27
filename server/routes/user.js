const express = require("express");
const router = express.Router();
const User = require("../models/User");
// const bcrypt = require('bcrypt');

router.get(
  "/",
  async (req, res) => {
    const data = await User.find({})
    res.json({success: true , data: data})
  }
);

module.exports = router;
