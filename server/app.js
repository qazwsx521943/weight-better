const express = require("express");

const bodyParser = require("body-parser");

// --[使用 .env(預設) 的環境變數]
require("dotenv").config();

// --[連線資料庫]
// const db = require("./modules/connect-mysql");

// NOTE if 使用sequelize 連 mysql db
const db = require("./db");
const { Member } = db.models;
// https://sequelize.org/docs/v6/getting-started/

// async IIFE
(async () => {
    await db.sequelize.sync({ force: true });
    try {
        await db.sequelize.authenticate();
        console.log("Connection to db successful!");
        const user = await Member.create({
            email: "abe@test.com",
            fullname: "Jason",
        });
        console.log(user.toJSON());
    } catch (error) {
        console.error("Error connecting to the db: ", error);
    }
})();

const app = express();

app.use(bodyParser.json()); // NOTE aplication/json

// resolution for CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

// 建立 member 路由
const member = require("./routes/member");
// --[建立 products 路由]
const products = require("./routes/products");
app.use("/products", products);
app.use("/member", member);

app.listen(8080, () => {
    console.log(`server run on port ${8080}`);
});
