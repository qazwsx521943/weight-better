const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const passport = require("passport");

const authController = require("../controllers/authController");

router.post("/login", authController.localLogin);

router.post("/forgot-password", authController.passwordReset);

router.get("/githubAccessToken", authController.githubLogin);

router.get("/githubUserProfile", authController.githubGetProfile);

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
        // session: false,
        // successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    }),
    (req, res) => {
        const userToken = jwt.sign({ username: req.user.username, id: req.user.id }, process.env.PASSPORT_SECRET);
        res.redirect("http://localhost:3000/login?token=" + userToken);
        // return res.json({
        //     token: "JWT " + userToken,
        //     username: req.user.username,
        //     profile_image: req.user.profile_image,
        //     id: req.user.id,
        // });
    }
);

router.get("/login/success", authController.googleSuccess);

// router.get("/login/check", (req, res) => res.json(req.user));

module.exports = router;
