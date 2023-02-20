const db = require("./../modules/connect-mysql");
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginValidation } = require("../validation");

// 會員登入
const localLogin = async (req, res) => {
    const { username, password } = req.body;
    // Joi 驗證
    let { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const sql = "SELECT * FROM `users` WHERE `username`=?";
    const [data] = await db.query(sql, username);
    const user = data[0];

    // 找不到此會員
    if (!user) return res.json({ error: "請先建立帳號再登入！" });

    // 核對密碼
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) return res.json({ error: "帳號或密碼錯誤！" });
        // JWT 令牌
        const userToken = jwt.sign({ username: user.username, id: user.id }, process.env.PASSPORT_SECRET);
        return res.json({
            token: "JWT " + userToken,
            username: user.username,
            id: user.id,
            state: user.state,
        });
    });
};

const googleLogin = async (req, res) => {
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account",
    });
};

module.exports = {
    localLogin,
    googleLogin,
};
