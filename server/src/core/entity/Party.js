const { Model, DataTypes } = require("sequelize");

class Party extends Model {
    static init(connection) {
        super.init({
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            description: {
                type: DataTypes.STRING(255)
            },
            date_time: {
                type: DataTypes.DATE
            }
        }, { sequelize: connection });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    }
}

module.exports = { Party };
