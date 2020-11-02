const express = require("express");

class Router {
    constructor(factories) {
        this.router = express.Router();
        this.factories = factories;
    }

    setupRoutes() {
        for (const factory of this.factories) {
            const route = factory.create();
            this.router.use("/api", route.getRoute());
        }
    }

    getRoutes() {
        return this.router;
    }
}

class RouterFactory {
    static create(factories) {
        return new Router(factories);
    }
}

module.exports = { RouterFactory };
