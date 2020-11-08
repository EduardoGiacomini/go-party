class RemovePartyUsecase {
    constructor(partyRepository, userRepository) {
        this.partyRepository = partyRepository;
        this.userRepository = userRepository;
    }

    async execute({userId, partyId}, responder) {
        try {
            if (!await this._isThereParty(partyId)) {
                const error = new Error('PARTY_DOES_NOT_EXIST');
                return responder.notFound(error);
            }

            if (!await this._doesThePartyBelongToUser(partyId, userId)) {
                throw new Error('PARTY_DOES_NOT_BELONG_TO_USER');
            }

            await this.partyRepository.remove(partyId, userId);
            responder.success();
        } catch (error) {
            responder.error(error);
        }
    }

    async _isThereParty(partyId) {
        const partiesCount = await this.partyRepository.countByPrimaryKey(partyId);
        return partiesCount > 0;
    }

    async _doesThePartyBelongToUser(partyId, userId) {
        const partiesCount = await this.partyRepository.countByPrimaryKeyAndUserId(partyId, userId);
        return partiesCount > 0;
    }
}

module.exports = { RemovePartyUsecase };
