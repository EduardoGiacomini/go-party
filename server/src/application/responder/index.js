class Responder {
    constructor(request, response, next) {
        this.request = request;
        this.response = response;
        this.next = next;
    }

    created(data) {
        this.response.status(201).json(data);
    }

    success(data) {
        this.response.json(data);
    }

    error(err) {
        this.response.status(400).json(err);
    }
}

class ResponderFactory {
    static create(request, response, next) {
        return new Responder(request, response, next);
    }
}

module.exports = { ResponderFactory };
