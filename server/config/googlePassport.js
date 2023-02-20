const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const db = require("../modules/connect-mysql");

passport.serializeUser((user, done) => {
    console.log("使用者序列化");
    console.log(user);
    done(null, user[0].id); // 將DB id 存入session
});

passport.deserializeUser(async (id, done) => {
    console.log("deserialize user to find id saved in the db");
    let [user] = await db.execute("SELECT * FROM `users` WHERE id = ", [id]);
    done(null, user[0]);
});

passport.use(
    // 需傳入兩個參數
    //1. obj：包含client id, client secret,callback callbackURL
    //2. function (取得authorization後執行) 可以在function內部判斷是否為用戶第一次登入
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/redirect",
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log("進入google strategy的區域");
            console.log(profile);
            let user = await db.execute("SELECT COUNT(*) FROM `users` WHERE `email` = ?", [profile.emails[0].value]);
            if (user > 0) {
                let [user] = await db.execute("SELECT * FROM `users` WHERE `email` = ?", [profile.emails[0].value]);
                console.log("使用者已經存在，無需存入DB", user);
                done(null, user);
            } else {
                const { displayName: fullname, id } = profile;
                const email = profile.emails[0].value;
                const profile_image = profile.photos[0].value;
                await db.execute(
                    "INSERT INTO `users` SET fullname = ?, email = ?,profile_image = ?, username = ?, password = ?,birth_date = ?",
                    [fullname, email, profile_image, email, id, "1990-08-08"]
                );
                let [user] = await db.execute("SELECT * FROM `users` WHERE `email` = ?", [email]);
                console.log("成功建立新用戶", user);
                done(null, user);
            }
        }
    )

    //
);
