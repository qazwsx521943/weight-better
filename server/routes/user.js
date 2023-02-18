const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

// POST : 會員註冊
router.post("/register", userController.userRegister);

// POST : 會員資料更新
router.put("/:username", userController.userUpdate);

// GET : 登入後會員資料
router.get("/:username", userController.userProfile);

// GET : 會員訂單
router.get("/:username/orders", userController.userOrder);

// Delete : 刪除會員
router.delete("/delete", userController.userDelete);

module.exports = router;
