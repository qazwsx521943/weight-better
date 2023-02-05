const express = require("express");

const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");
// const feedRoutes = require("./controllers/feed");

// --[使用 .env(預設) 的環境變數]
require('dotenv').config()

// --[連線資料庫]
const db = require('./modules/connect-mysql')

const app = express();

app.use(bodyParser.json()); // NOTE aplication/json

// resolution for CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.use("/feed", feedRoutes);

// --[建立 products 路由]
const products = require('./routes/products')
app.use('/products', products)

app.listen(8080, () => {
    console.log(`server run on port ${8080}`)
});
