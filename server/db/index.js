const Sequelize = require("sequelize");

// connection to db settings
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: 3306,
    }
);

// for exporting methods to app.js
const db = {
    sequelize,
    Sequelize,
    models: {},
};

// import model "Users"
db.models.Users = require("./models/users.js")(sequelize);
// import model "Orders"
db.models.Orders = require("./models/orders.js")(sequelize);
module.exports = db;
