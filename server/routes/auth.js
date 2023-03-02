const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const passport = require("passport");

const authController = require("../controllers/authController");

router.post("/login", authController.localLogin);

router.post("/forgot-password", authController.passwordReset);

// TODO: 有空再做 Github Oauth
router.get("/githubAccessToken", authController.githubLogin);

router.get("/githubUserProfile", authController.githubGetProfile);

// Google Oauth
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account",
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }),
    authController.googleSuccess
);

// router.get("/login/success", authController.googleSuccess);

module.exports = router;
