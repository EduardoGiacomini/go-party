const { FindPartyByIdUsecase } = require("../../../core/usecase/party/FindPartyByIdUsecase");
const { PartyRepository } = require("../../../dataprovider/repositories/PartyRepository");
const { Party } = require("../../../core/entity/Party");
const { UserRepository } = require("../../../dataprovider/repositories/UserRepository");
const { User } = require("../../../core/entity/User");
const { FindPartyByIdRoute } = require("../../../gateway/routes/party/FindPartyByIdRoute");
const { ResponderFactory } = require("../../responder");

class FindPartyByIdFactory {
    static create() {
        const usecase = new FindPartyByIdUsecase(new PartyRepository(Party), new UserRepository(User));
        return new FindPartyByIdRoute(usecase, ResponderFactory);
    }
}

module.exports = { FindPartyByIdFactory };
