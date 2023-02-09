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

// for exporting methods
const db = {
    sequelize,
    Sequelize,
    models: {},
};

// import table "Member"
db.models.Member = require("./models/member.js")(sequelize);

module.exports = db;
