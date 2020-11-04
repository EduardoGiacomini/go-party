const { CreateUserUsecase } = require("../../../core/usecase/user/CreateUserUsecase");
const { UserRepository } = require("../../../dataprovider/repositories/UserRepository");
const { User } = require("../../../core/entity/User");
const { CreateUserRoute } = require("../../../gateway/routes/User/CreateUserRoute");
const { ResponderFactory } = require("../../responder");

class CreateUserFactory {
    static create() {
        const usecase = new CreateUserUsecase(new UserRepository(User));
        return new CreateUserRoute(usecase, ResponderFactory);
    }
}

module.exports = { CreateUserFactory };
