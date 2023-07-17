module.exports = (sequelize, DataTypes) => {
    const Programs = sequelize.define("Programs", {
        // dans sequelize les champs ID et createdAt et updatedAt sont générés automatiquement par défaut
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slogan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    })

    return Programs
}