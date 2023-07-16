module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
// dans sequelize les champs ID et createdAt et updatedAt sont générés automatiquement par défaut
        userID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Users
}