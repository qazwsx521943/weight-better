const Sequelize = require("sequelize");

// connection to db settings
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: 3307,
    }
);

const db = {
    sequelize,
    Sequelize,
    models: {},
};

db.models.Member = require("./models/member.js")(sequelize);

module.exports = db;
