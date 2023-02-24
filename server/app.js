const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

// --[使用 .env(預設) 的環境變數]
require("dotenv").config();

const passport = require("passport");
require("./config/passport")(passport);
const session = require("express-session");
// require("./config/googlePassport");

// --[連線資料庫]
const db = require("./modules/connect-mysql");

const authRouter = require("./routes/auth");
// 導入 user 路由
const userRouter = require("./routes/user");
// --[建立 products 路由]
const products = require("./routes/products");
// const courseRouter = require("./routes/course");

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

app.use(passport.initialize());
app.use(passport.session());
// resolution for CORS

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// routes middleware
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/story", require("./routes/story"));
app.use("/menu", require("./routes/menu"));
app.use("/products", products);

// app.use("/user", passport.authenticate("jwt",{session:false}),userRouter);

app.listen(8080, () => {
    console.log(`server run on port ${8080}`);
});
