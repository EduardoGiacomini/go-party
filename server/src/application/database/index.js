const { Sequelize } = require("sequelize");
const databaseConfig = require("./config");

class Database {
    constructor(config, entities) {
        this.connection = null;
        this.config = config;
        this.entities = entities;
    }

    async connect() {
        await this._connectDatabase();
        this._connectEntities();
    }

    async _connectDatabase() {
        this.connection = new Sequelize(this.config);
        await this.connection.authenticate();
    }

    _connectEntities() {
        for (const entity of this.entities) {
            entity.init(this.connection);
            console.log(`${entity.name} reconhecida.`)
        }
    }
}

class DatabaseFactory {
    static create(config, entities) {
        let database = null;

        if (config) {
            database = new Database(config, entities);
        } else {
            return new Database(databaseConfig, entities);    
        }

        return database;
    }
}

module.exports = { DatabaseFactory };
