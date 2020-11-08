const express = require("express");

class UpdatePartyRoute {
    constructor(usecase, responderFactory) {
        this.usecase = usecase;
        this.responderFactory = responderFactory;
    }

    controller(request, response, next) {
        const responder = this.responderFactory.create(request, response, next);
        const { userId, partyId } = request.params;
        const { name, description, dateTime } = request.body;
        const party = { name, description, date_time: dateTime };
        const ids = { partyId, userId };
        this.usecase.execute({ids, party}, responder);
    }

    getRoute() {
        const route = new express.Router();
        route.put("/users/:userId/parties/:partyId", (request, response, next) => this.controller(request, response, next));
        return route
    }
}

module.exports = { UpdatePartyRoute };
