module.exports = (sequelize, DataTypes) => {
    const Programs = sequelize.define("Programs", {
// dans sequelize les champs ID et createdAt et updatedAt sont générés automatiquement par défaut
        
        programName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        programSlogan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        programDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        programPicture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        programFreemium: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        programprice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        programSlug: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Programs
}