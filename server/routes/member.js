const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

// GET /feed/posts
// router.get("/posts", feedController.getPosts);

// GET /feed/post
router.post("/signup_submit", (req, res) => {
    console.log(req.body.fullname);
});

module.exports = router;
