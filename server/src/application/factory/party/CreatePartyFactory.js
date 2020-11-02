const { CreatePartyUsecase } = require("../../../core/usecase/party/CreatePartyUsecase");
const { PartyRepository } = require("../../../dataprovider/repositories/PartyRepository");
const { Party } = require("../../../core/entity/Party");
const { CreatePartyRoute } = require("../../../gateway/routes/party/CreatePartyRoute");
const { ResponderFactory } = require("../../responder");

class CreatePartyFactory {
    static create() {
        const usecase = new CreatePartyUsecase(new PartyRepository(Party));
        return new CreatePartyRoute(usecase, ResponderFactory);
    }
}

module.exports = { CreatePartyFactory };
