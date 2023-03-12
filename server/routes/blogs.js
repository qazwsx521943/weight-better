const express = require("express");
const router = express.Router();
const db = require("../modules/connect-mysql");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();

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
            [title, description, JSON.stringify(content), image, imageLabel]
        );
        res.json({ id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
});

//抓取最新的10筆資料
router.get("/post/latest", async (req, res) => {
  try {
      const latestPosts = await db.query(
          "SELECT * FROM `blogs` ORDER BY `date` DESC LIMIT 10"
      );
      res.json(latestPosts[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
  }
});

// 根據ID抓取特定的文章
router.get("/post/:id", async (req, res) => {
    const { id } = req.params;

    try {
        let [[blog]] = await db.query("SELECT * FROM `blogs` WHERE `id` = ?", [
            id,
        ]);
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
// 抓取特定類別的文章的路由
router.get("/post/category/:category", async (req, res) => {
    const { category } = req.params;

    try {
        let [blogs] = await db.query(
            "SELECT * FROM `blogs` WHERE `category` = ?",
            [category]
        );
        res.json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
});

// 抓取隨機category的文章的路由
router.get("/post/category/:category/random", async (req, res) => {
    const { category } = req.params;

    try {
        let [[randomPost]] = await db.query(
            "SELECT * FROM `blogs` WHERE `category` = ? ORDER BY RAND() LIMIT 1",
            [category]
        );
        if (randomPost) {
            res.json(randomPost);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
});



module.exports = router;
