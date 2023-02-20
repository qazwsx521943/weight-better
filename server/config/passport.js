let JwtStrategy = require("passport-jwt").Strategy;
let ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../modules/connect-mysql");

module.exports = (passport) => {
    let opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: process.env.PASSPORT_SECRET,
    };

    passport.use(
        new JwtStrategy(opts, async function (jwt_payload, done) {
            try {
                let foundUser = db.query("SELECT * FROM `users` WHERE id = ?", [
                    jwt_payload.id,
                ]);
                if (foundUser) {
                    return done(null, foundUser);
                } else {
                    return done(null, false);
                }
            } catch (e) {
                return done(e, false);
            }
        })
    );
};
