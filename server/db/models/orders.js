const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    class Orders extends Sequelize.Model {}
    Orders.init(
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            order_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },

            state: {
                type: Sequelize.ENUM(
                    "訂單確認中",
                    "已成立",
                    "配送中",
                    "已完成"
                ),
            },
        },
        { modelName: "orders", sequelize }
    );
    return Orders;
};

// const order = await Orders.findAll();
// console.log(order.map((i) => i.toJSON()));
