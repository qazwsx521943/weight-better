const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

const multer = require("multer");

const passport = require("passport");
require("../config/passport")(passport);
// require("../config/googlePassport");

const { storage } = require("../cloudinary");
const upload = multer({ storage });

// 會員註冊 TODO: 進階驗證留到最後
router.post("/register", userController.userRegister);

// 更新會員資料 test OK
router.post("/update/profile/:id", userController.userUpdate);

// 取得會員資料 test OK
router.get("/find/:username", userController.userProfile);

// 取得會員訂單 test OK
router.get("/find/:username/orders", userController.userOrder);

// TODO: Delete : 刪除會員
// router.delete("/delete", userController.userDelete);

// 追蹤了哪些人 test OK
router.get("/find/:username/following", userController.userFollowing);

// 被哪些人追蹤 test OK
router.get("/find/:username/followers", userController.userFollowers);

// 追蹤別人 / 退追別人 test OK
router.post("/follow", passport.authenticate("jwt", { session: false }), userController.userFollow);

// 移除粉絲 test OK
router.post("/deletefan", userController.userDelFan);

// 上傳大頭貼至cloudinary test OK
router.post("/upload/avatar/:username", upload.single("image"), userController.userSetAvatar);

module.exports = router;
