const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// --[使用 .env(預設) 的環境變數]
require("dotenv").config();

// --[連線資料庫]
// const db = require("./modules/connect-mysql");

//! NOTE if 使用sequelize 連 mysql db
const db = require("./models");
const { Users } = require("./models/");

// 導入 user 路由
const userRouter = require("./routes/user");
// --[建立 products 路由]
const products = require("./routes/products");

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// resolution for CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

// routes middleware
app.use("/products", products);
app.use("/api/user", userRouter);

db.sequelize.sync().then((req) => {
    app.listen(8080, () => {
        console.log(`server run on port ${8080}`);
    });
});

// async IIFE
// (async () => {
//     await db.sequelize.sync({ force: true });
//     try {
//         // db connection auth
//         await db.sequelize.authenticate();
//         console.log("Connection to db successful!");
//     } catch (error) {
//         console.error("Error connecting to the db: ", error);
//     }
// })();
