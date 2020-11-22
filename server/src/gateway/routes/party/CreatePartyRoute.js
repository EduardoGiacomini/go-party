const express = require("express");

class CreatePartyRoute {
    constructor(usecase, responderFactory) {
        this.usecase = usecase;
        this.responderFactory = responderFactory;
    }

    controller(request, response, next) {
        const responder = this.responderFactory.create(request, response, next);
        const { userId } = request.params;
        const { name, description, date_time } = request.body;
        const party = { name, description, date_time };
        this.usecase.execute({userId, party}, responder);
    }

    getRoute() {
        const route = new express.Router();
        route.post("/users/:userId/parties", (request, response, next) => this.controller(request, response, next));
        return route
    }
}

module.exports = { CreatePartyRoute };
