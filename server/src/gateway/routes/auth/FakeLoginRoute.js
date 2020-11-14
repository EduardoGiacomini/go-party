const express = require("express");

class FakeLoginRoute {
    constructor(usecase, responderFactory) {
        this.usecase = usecase;
        this.responderFactory = responderFactory;
    }

    controller(request, response, next) {
        const responder = this.responderFactory.create(request, response, next);
        const { name, email } = request.body;
        this.usecase.execute({name, email}, responder);
    }

    getRoute() {
        const route = new express.Router();
        route.post("/auth/login", (request, response, next) => this.controller(request, response, next));
        return route
    }
}

module.exports = { FakeLoginRoute };
