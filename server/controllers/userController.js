const db = require("../models");

const { User } = require("../models");

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

// 會員註冊
const userRegister = async (req, res) => {
    let data = req.body;

    const user = await User.create(data);
    res.send(user);
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
    try {
        const user = await User.findOne({
            where: { username, password },
        });
        res.send(user);
    } catch (err) {
        console.log(err);
    }
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
