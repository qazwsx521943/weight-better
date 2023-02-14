const { verify } = require("jsonwebtoken");
const validateToken = (req, res, next) => {
    // 透過request header 取得前端傳的token
    const userToken = req.header("userToken");

    // 沒有token
    if (!userToken) return res.json({ error: "權限不足！" });

    // 驗證是否有效的token
    try {
        const validToken = verify(userToken, "tokeneed");
        req.user = validToken;
        if (validToken) {
            return next();
        }
    } catch (err) {
        return res.json({ error: err });
    }
};

module.exports = { validateToken };
