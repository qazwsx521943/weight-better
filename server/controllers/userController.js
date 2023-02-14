const db = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const { User } = require("../models");

// Handler function to wrap each route.
// function asyncHandler(cb) {
//     return async (req, res, next) => {
//         try {
//             await cb(req, res, next);
//         } catch (err) {
//             res.status(500).send(err);
//         }
//     };
// }

// 會員註冊
const userRegister = async (req, res) => {
    let { password, username, birth_date, fullname, email } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        User.create({
            username,
            password: hash,
            birth_date,
            fullname,
            email,
        });
        res.json("帳號建立成功");
    });
};

// 會員資料
const userProfile = async (req, res) => {
    let { username, password } = req.body;
    const user = await User.findOne({
        where: { username: username, password: password },
    });
};

// 會員登入
const userLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({
        where: { username },
    });

    // 找不到此會員
    if (!user) res.json({ error: "請先建立帳號再登入！" });

    // 核對密碼
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "帳號或密碼錯誤！" });
        const userToken = sign(
            { username: user.username, id: user.id },
            "tokeneed"
        );
        res.json(userToken);
    });
};

// 更新會員資料
const userUpdate = async (req, res) => {
    let id = req.params.id;
    const user = await User.update(req.body, { where: { id: id } });

    res.status(200).send(user);
};

// 刪除帳號
const userDelete = async (req, res) => {
    let id = req.params.id;
    await User.destroy({ where: { id: id } });

    res.status(200).send("User is deleted");
};

module.exports = {
    userRegister,
    userUpdate,
    userDelete,
    userProfile,
    userLogin,
};
