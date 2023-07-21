module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        // dans sequelize les champs ID et createdAt et updatedAt sont générés automatiquement par défaut
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Users
}