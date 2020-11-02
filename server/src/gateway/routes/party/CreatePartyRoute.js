const express = require("express");

class CreatePartyRoute {
    constructor(usecase, responderFactory) {
        this.usecase = usecase;
        this.responderFactory = responderFactory;
    }

    controller(request, response, next) {
        const responder = this.responderFactory.create(request, response, next);
        const party = request.body;
        this.usecase.execute(party, responder);
    }

    getRoute() {
        const route = new express.Router();
        route.post("/parties", (request, response, next) => this.controller(request, response, next));
        return route
    }
}

module.exports = { CreatePartyRoute };
