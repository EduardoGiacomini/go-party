const express = require("express");

class CreateUserRoute {
    constructor(usecase, responderFactory) {
        this.usecase = usecase;
        this.responderFactory = responderFactory;
    }

    controller(request, response, next) {
        const responder = this.responderFactory.create(request, response, next);
        const {name, email, phone} = request.body;
        this.usecase.execute({name, email, phone}, responder);
    }

    getRoute() {
        const route = new express.Router();
        route.post("/users", (request, response, next) => this.controller(request, response, next));
        return route
    }
}

module.exports = { CreateUserRoute };
