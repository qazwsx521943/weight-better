const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    // member model
    class Member extends Sequelize.Model {}
    Member.init(
        {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            email: Sequelize.STRING,
            fullname: Sequelize.STRING,
        },
        { sequelize }
    );

    return Member;
};
