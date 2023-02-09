module.exports = (sequelize, DataTypes) => {
    // Calling sequelize.define(modelName, attributes, options)
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true },
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true },
        },
        username: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        birth_date: { type: DataTypes.DATEONLY, allowNull: false },
        profile_image: { type: DataTypes.STRING, allowNull: true },
        introduction: { type: DataTypes.TEXT, allowNull: true },
        nickname: { type: DataTypes.STRING, allowNull: true },
        gender: { type: DataTypes.ENUM("male", "female"), allowNull: true },
        weight: { type: DataTypes.INTEGER, allowNull: true },
        height: { type: DataTypes.INTEGER, allowNull: true },
        interest: { type: DataTypes.STRING, allowNull: true },
        state: {
            type: DataTypes.ENUM("norm", "vip", "banned"),
            defaultValue: "norm",
        },
        login: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    return User;
};
