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
    console.log("emailOK!");
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
    const sql2 =
        "SELECT followers.*,users.username FROM `followers` JOIN `users` ON followers.following_id = users.id WHERE follower_id = ?";
    const [following] = await db.execute(sql2, [user[0].id]);

    const sql3 =
        "SELECT followers.*,users.username FROM `followers` JOIN `users` ON followers.follower_id = users.id WHERE following_id = ?";
    const [followedBy] = await db.execute(sql3, [user[0].id]);

    const followingUser = following;
    const followedByUser = followedBy;

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

const userFollow = async (req, res) => {
    const follow = req.params.username;
    const follower_id = req.body.follower_id;

    const sql = "SELECT * FROM `users` WHERE `username`= ?";
    const [followUser] = await db.execute(sql, [follow]);
    const sqlCheck = "SELECT `follower_id`, `following_id` FROM `followers` WHERE follower_id = ? AND following_id = ?";
    const check = await db.execute(sqlCheck, [follower_id, followUser[0].id]);
    if (check) {
        res.end();
    }
    const sql2 = "INSERT INTO `followers`(`follower_id`, `following_id`) VALUES (?,?)";
    await db.execute(sql2, [follower_id, followUser[0].id]);
    // console.log(main_user, follow);
    // res.send(req.body);
};

const userUnfollow = async (req, res) => {
    const unfollowUser = req.params.username;
    const follower_id = req.body.follower_id;

    const sql = "SELECT * FROM `users` WHERE `username`= ?";
    const [unfollow] = await db.execute(sql, [unfollowUser]);

    const sql2 = "DELETE FROM `followers` WHERE follower_id = ? AND following_id = ?";
    await db.query(sql2, [follower_id, unfollow[0].id]);
};

module.exports = {
    userRegister,
    userUpdate,
    userDelete,
    userProfile,
    userOrder,
    userFollow,
    userUnfollow,
};
