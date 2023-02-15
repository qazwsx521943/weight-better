const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");
const { validateToken } = require("../middlewares/AuthMiddleware");

// POST : 會員註冊
router.post("/register", userController.userRegister);

// POST : 會員登入驗證
router.post("/login", userController.userLogin);

// GET : Token 驗證
router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});

// POST : 會員更新
router.post("/update", userController.userUpdate);

// GET : 登入後會員資料
router.get("/profile/:username", userController.userProfile);

// Delete : 刪除會員
router.delete("/delete", userController.userDelete);

module.exports = router;
