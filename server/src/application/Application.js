const express = require("express");

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

            this._startApplication();
        } catch (error) {
            console.log(error)
        }
    }

    _applyMiddlewares() {
        this.app.use(express.json());
        this.app.use(exception);
    }

    _applyRoutes(routes) {
        this.app.use(routes);
    }

    _startApplication() {
        this.app.listen(this.port, this.host, () => {
            console.log(`🚀 Server started on http://${this.host}:${this.port}`);
        });
    }
}

class ApplicationFactory {
    static create(host='localhost', port=8080) {
        return new Application(host, port);
    }
}

module.exports = { ApplicationFactory };