const { Model, DataTypes } = require("sequelize");

class Party extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            date: DataTypes.DATE
        }, { sequelize: connection });
    }
}

module.exports = { Party };
