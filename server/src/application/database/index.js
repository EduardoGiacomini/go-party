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
        this._associateEntities();
    }

    async _connectDatabase() {
        this.connection = new Sequelize(this.config);
        await this.connection.authenticate();
        console.info('✅ Banco de dados conectado.')
    }

    _connectEntities() {
        for (const entity of this.entities) {
            entity.init(this.connection);
        }
        console.info('✅ Entidades reconhecidas.')
    }

    _associateEntities() {
        for (const entity of this.entities) {
            entity.associate(this.connection.models);
        }
        console.info('✅ Entidades associadas.')
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
