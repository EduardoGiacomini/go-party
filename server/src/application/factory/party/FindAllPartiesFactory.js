const { FindAllPartiesUsecase } = require("../../../core/usecase/party/FindAllPartiesUsecase");
const { UserRepository } = require("../../../dataprovider/repositories/UserRepository");
const { User } = require("../../../core/entity/User");
const { FindAllPartiesRoute } = require("../../../gateway/routes/party/FindAllPartiesRoute");
const { ResponderFactory } = require("../../responder");

class FindAllPartiesFactory {
    static create() {
        const usecase = new FindAllPartiesUsecase(new UserRepository(User));
        return new FindAllPartiesRoute(usecase, ResponderFactory);
    }
}

module.exports = { FindAllPartiesFactory };
