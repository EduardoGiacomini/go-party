const express = require("express");

class RemovePartyRoute {
    constructor(usecase, responderFactory) {
        this.usecase = usecase;
        this.responderFactory = responderFactory;
    }

    controller(request, response, next) {
        const responder = this.responderFactory.create(request, response, next);
        const { userId, partyId } = request.params;
        this.usecase.execute({userId, partyId}, responder);
    }

    getRoute() {
        const route = new express.Router();
        route.delete("/users/:userId/parties/:partyId", (request, response, next) => this.controller(request, response, next));
        return route
    }
}

module.exports = { RemovePartyRoute };
