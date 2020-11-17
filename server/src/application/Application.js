const express = require("express");
const cors = require("cors");

const { exception } = require("./middlewares/exception");

const { entities } = require("../core/entity");
const { DatabaseFactory } = require("./database");

const { factories } = require("./factory");
const { RouterFactory } = require("./router");

class Application {
    constructor(host, port) {
        this.app = express();
        this.host = host;
        this.port = port;

        this._applyMiddlewares();
    }

    async start() {
        try {
            const database = DatabaseFactory.create(null, entities);
            await database.connect();

            const router = RouterFactory.create(factories);
            router.setupRoutes();

            this._applyRoutes(router.getRoutes());
            this._applyExceptionsHandlers();

            this._startApplication();
        } catch (error) {
            console.log(error)
        }
    }

    _applyMiddlewares() {
        this.app.use(express.json());
	this.app.use(cors());
    }

    _applyRoutes(routes) {
        this.app.use(routes);
    }

    _applyExceptionsHandlers() {
        this.app.use(exception);
    }

    _startApplication() {
        this.app.listen(this.port, this.host, () => {
            console.log(`🚀 Servidor iniciado em http://${this.host}:${this.port}.`);
        });
    }
}

class ApplicationFactory {
    static create(host='localhost', port=8080) {
        return new Application(host, port);
    }
}

module.exports = { ApplicationFactory };
