class UpdatePartyUsecase {
    constructor(partyRepository, userRepository) {
        this.partyRepository = partyRepository;
        this.userRepository = userRepository;
    }

    async execute({ids, party}, responder) {
        try {
            const { userId, partyId } = ids;

            if (!await this._isThereParty(partyId)) {
                const error = new Error('PARTY_DOES_NOT_EXIST');
                return responder.notFound(error);
            }

            if (!await this._doesThePartyBelongToUser(partyId, userId)) {
                const error = new Error('PARTY_DOES_NOT_BELONG_TO_USER');
                return responder.error(error);
            }

            const updatedParty = await this.partyRepository.update(partyId, userId, party);
            responder.success(updatedParty);
        } catch (error) {
            responder.error(error);
        }
    }

    async _isThereParty(partyId) {
        return this.partyRepository.findByPrimaryKey(partyId);
    }

    async _doesThePartyBelongToUser(partyId, userId) {
        return this.partyRepository.findByPrimaryKeyAndUserId(partyId, userId);
    }
}

module.exports = { UpdatePartyUsecase };
