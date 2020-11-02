class CreatePartyUsecase {
    constructor(partyRepository) {
        this.partyRepository = partyRepository;
    }

    async execute(party, responder) {
        try {
            const createdParty = await this.partyRepository.create(party);
            responder.created(createdParty);
        } catch (error) {
            responder.error(error);
        }
    }
}

module.exports = { CreatePartyUsecase };
