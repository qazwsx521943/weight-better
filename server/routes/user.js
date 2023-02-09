const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

const db = require("../db");
const { Users } = db.models;

// Handler function to wrap each route.
function asyncHandler(cb) {
    return async (req, res, next) => {
        try {
            await cb(req, res, next);
        } catch (err) {
            res.status(500).send(err);
        }
    };
}

// POST :  user signup form
router.post("/signup_submit", async (req, res) => {
    const user = await Users.create(req.body);
});

// POST :  user profile change
router.post("/profile_submit", async (req, res) => {
    const user = await Users.create(req.body);
    console.log(user);
});

//

module.exports = router;
