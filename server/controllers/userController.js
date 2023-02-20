const db = require("./../modules/connect-mysql");
const { registerValidation } = require("../validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// 會員註冊
const userRegister = async (req, res) => {
    //  /user/register
    let { password, username, birth_date, fullname, email } = req.body;
    // Joi 驗證
    let { error } = registerValidation({ password, username, email });
    if (error) return res.status(400).send(error.details[0].message);

    // email驗證
    const emailExist = await db.execute("SELECT COUNT(*) FROM `users` WHERE `email` = ?", [email]);
    if (emailExist > 0) return res.status(400).send("此信箱已經註冊過囉！");

    // 存入ＤＢ
    const sql = "INSERT INTO `users` SET username = ?, password = ?, birth_date = ?, fullname = ?, email = ?";

    bcrypt.hash(password, 10).then((hash) => {
        const user = db.execute(sql, [username, hash, birth_date, fullname, email]);
        res.send({ msg: "帳號建立成功", user });
    });
};

// 撈取已登入會員的資料
const userProfile = async (req, res) => {
    //  /user/:username
    const username = req.params.username;

    const sql = "SELECT * FROM `users` WHERE `username`= ?";
    const [user] = await db.execute(sql, [username]);
    console.log(user);
    const sql2 = "SELECT COUNT(*) AS total FROM `follower` WHERE `main_user` = ?";
    const [following] = await db.execute(sql2, [user[0].id]);
    const sql3 = "SELECT COUNT(*) AS total FROM `follower` WHERE `following_user` = ?";
    const [followedBy] = await db.execute(sql3, [user[0].id]);

    const followingUser = following[0]["total"];
    const followedByUser = followedBy[0]["total"];

    user.push(followingUser, followedByUser);

    res.json(user);
};

// 更新已登入會員資料
const userUpdate = async (req, res) => {
    //  /user/:username
    let username = req.params.username;
    let data = req.body;

    const sql = "UPDATE `users` SET ? WHERE `username`=?";
    const user = await db.query(sql, [data, username]);

    res.json(user);
};

// 刪除帳號
const userDelete = async (req, res) => {
    let id = req.params.id;
    await User.destroy({ where: { id: id } });

    res.status(200).send("User is deleted");
};

const userOrder = async (req, res) => {
    let username = req.params.username;
    const [user] = await db.execute("SELECT * FROM `users` WHERE `username` = ?", [username]);

    const [orders] = await db.execute("SELECT * FROM `orders` WHERE `user_id` = ?", [+user[0].id]);

    res.json(orders);
    // res.json(user);
    // const sql = "SELECT * FROM `orders` WHERE ``"
};

module.exports = {
    userRegister,
    userUpdate,
    userDelete,
    userProfile,
    userOrder,
};
