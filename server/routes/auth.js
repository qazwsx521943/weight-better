const express = require("express");

const router = express.Router();
const passport = require("passport");

const authController = require("../controllers/authController");

router.post("/login", authController.localLogin);

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account",
    })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    return res.redirect("/");
});

module.exports = router;
