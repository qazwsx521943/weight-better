const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

// --[使用 .env(預設) 的環境變數]
require("dotenv").config();

// --[連線資料庫]
const db = require("./modules/connect-mysql");

// 導入 user 路由
const userRouter = require("./routes/user");
// --[建立 products 路由]
const products = require("./routes/products");

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// resolution for CORS
app.use(cors());

// routes middleware
app.use("/products", products);
app.use("/user", userRouter);

app.listen(8080, () => {
    console.log(`server run on port ${8080}`);
});
