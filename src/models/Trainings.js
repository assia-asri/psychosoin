module.exports = (sequelize, DataTypes) => {
    const Trainings = sequelize.define("Trainings", {
// dans sequelize les champs ID et createdAt et updatedAt sont générés automatiquement par défaut
        
        trainingName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trainingSlogan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trainingDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trainingPicture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trainingVideo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        programFreemium: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        trainingPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        trainingSlug: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Trainings;
}