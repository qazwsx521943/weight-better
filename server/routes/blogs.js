const express = require("express");
const router = express.Router();
const db = require("../modules/connect-mysql");

// 抓取所有blogs中的資料
router.get("/", async(req, res) => {
  let [blogs] = await db.query("SELECT * FROM `blogs` WHERE 1");
  res.json(blogs)
});

module.exports = router;