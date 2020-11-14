const { FakeLoginUsecase } = require("../../../core/usecase/auth/FakeLoginUsecase");
const { UserRepository } = require("../../../dataprovider/repositories/UserRepository");
const { User } = require("../../../core/entity/User");
const { FakeLoginRoute } = require("../../../gateway/routes/auth/FakeLoginRoute");
const { ResponderFactory } = require("../../responder");

class FakeLoginFactory {
    static create() {
        const usecase = new FakeLoginUsecase(new UserRepository(User));
        return new FakeLoginRoute(usecase, ResponderFactory);
    }
}

module.exports = { FakeLoginFactory };
