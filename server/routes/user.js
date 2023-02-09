const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

// POST : 會員註冊
router.post("/userSignup", userController.userSignup);

// POST : 會員更新
router.post("/userUpdate", userController.userUpdate);

// GET : 登入後會員資料
router.get("/userProfile", userController.userProfile);

// Delete : 刪除會員
router.delete("/userDelete", userController.userDelete);

module.exports = router;
