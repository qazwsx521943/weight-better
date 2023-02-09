const Sequelize = require("sequelize");

// 建立TABLE 步驟

module.exports = (sequelize) => {
    // creating a "Users" table
    class Users extends Sequelize.Model {}
    Users.init(
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            email: { type: Sequelize.STRING, allowNull: false },
            fullname: { type: Sequelize.STRING, allowNull: false },
            password: { type: Sequelize.STRING, allowNull: false },
            birth_date: { type: Sequelize.DATEONLY, allowNull: false },
            username: { type: Sequelize.STRING, allowNull: false },
            profile_image: { type: Sequelize.STRING, allowNull: true },
            introduction: { type: Sequelize.TEXT, allowNull: true },
            gender: { type: Sequelize.ENUM("male", "female"), allowNull: true },
            weight: { type: Sequelize.INTEGER, allowNull: true },
            height: { type: Sequelize.INTEGER, allowNull: true },
            state: {
                type: Sequelize.ENUM("norm", "vip", "banned"),
                defaultValue: "norm",
            },
        },
        // Model options object
        { modelName: "users", sequelize }
    );

    return Users;
};

// const user = await Users.create({
//     email: "abe@test.com",
//     fullname: "Jason",
//     password: "abcde",
//     birth_date: "1998-6-30",
//     username: "cscscs",
// });
// console.log(user.toJSON());
// const orders = await Orders.create({
//     order_date: Date.now(),
//     state: "已成立",
// });

// console.log(order.toJSON());
// const order = await Orders.findAll({
//     attributes: ["id", "state"],
//     where: {
//         order_date: {
//             [Op.lte]: Date.now(),
//         },
//     },
// });
