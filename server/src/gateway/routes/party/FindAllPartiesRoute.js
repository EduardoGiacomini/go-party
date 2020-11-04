const express = require("express");

class FindAllPartiesRoute {
    constructor(usecase, responderFactory) {
        this.usecase = usecase;
        this.responderFactory = responderFactory;
    }

    controller(request, response, next) {
        const responder = this.responderFactory.create(request, response, next);
        const { userId } = request.params;
        this.usecase.execute(userId, responder);
    }

    getRoute() {
        const route = new express.Router();
        route.get("/users/:userId/parties", (request, response, next) => this.controller(request, response, next));
        return route
    }
}

module.exports = { FindAllPartiesRoute };
