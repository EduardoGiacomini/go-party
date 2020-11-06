const { RemovePartyUsecase } = require("../../../core/usecase/party/RemovePartyUsecase");
const { PartyRepository } = require("../../../dataprovider/repositories/PartyRepository");
const { Party } = require("../../../core/entity/Party");
const { UserRepository } = require("../../../dataprovider/repositories/UserRepository");
const { User } = require("../../../core/entity/User");
const { RemovePartyRoute } = require("../../../gateway/routes/party/RemovePartyRoute");
const { ResponderFactory } = require("../../responder");

class RemovePartyFactory {
    static create() {
        const usecase = new RemovePartyUsecase(new PartyRepository(Party), new UserRepository(User));
        return new RemovePartyRoute(usecase, ResponderFactory);
    }
}

module.exports = { RemovePartyFactory };
