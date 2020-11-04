const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(connection) {
        super.init({
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            phone: {
                type: DataTypes.STRING(11)
            }
        }, { sequelize: connection });
    }
}

module.exports = { User };
