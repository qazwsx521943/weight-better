const express = require("express");
const router = express.Router();
const db = require("../modules/connect-mysql");

// 抓取所有blogs中的資料
router.get("/", async (req, res) => {
  let [blogs] = await db.query("SELECT * FROM `blogs` WHERE 1");
  res.json(blogs);
});

router.post("/", async (req, res) => {
  const { title, description, content, image, imageLabel } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO `blogs` (`title`, `description`, `content`, `image`, `imageLabel`, `date`) VALUES (?, ?, ?, ?, ?, NOW())",
      [title, description, content, image, imageLabel]
    );
    res.json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// 根據ID抓取特定的文章
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let [[blog]] = await db.query("SELECT * FROM `blogs` WHERE `id` = ?", [id]);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
