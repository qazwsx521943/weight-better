const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

const db = require("../db");
const { Orders } = db.models;

// POST :  user signup form
router.post("/signup_submit", async (req, res) => {
    const user = await Users.create(req.body);
});

//

module.exports = router;
