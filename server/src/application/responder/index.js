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
        this.next(err);
    }

    notFound(err) {
        err.status = 404;
        this.next(err);
    }

    unauthorized(err) {
        err.status = 401;
        this.next(err);
    }
}

class ResponderFactory {
    static create(request, response, next) {
        return new Responder(request, response, next);
    }
}

module.exports = { ResponderFactory };
