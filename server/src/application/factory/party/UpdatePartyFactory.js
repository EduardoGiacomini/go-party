const { UpdatePartyUsecase } = require("../../../core/usecase/party/UpdatePartyUsecase");
const { PartyRepository } = require("../../../dataprovider/repositories/PartyRepository");
const { Party } = require("../../../core/entity/Party");
const { UserRepository } = require("../../../dataprovider/repositories/UserRepository");
const { User } = require("../../../core/entity/User");
const { UpdatePartyRoute } = require("../../../gateway/routes/party/UpdatePartyRoute");
const { ResponderFactory } = require("../../responder");

class UpdatePartyFactory {
    static create() {
        const usecase = new UpdatePartyUsecase(new PartyRepository(Party), new UserRepository(User));
        return new UpdatePartyRoute(usecase, ResponderFactory);
    }
}

module.exports = { UpdatePartyFactory };
