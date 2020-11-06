class RemovePartyUsecase {
    constructor(partyRepository, userRepository) {
        this.partyRepository = partyRepository;
        this.userRepository = userRepository;
    }

    async execute({userId, partyId}, responder) {
        try {
            if (!await this._isThereUser(userId)) {
                const error = new Error('USER_DOES_NOT_EXIST');
                return responder.notFound(error);
            }

            if (!await this._isThereParty(partyId)) {
                const error = new Error('PARTY_DOES_NOT_EXIST');
                return responder.notFound(error);
            }

            await this.partyRepository.remove(userId, partyId);
            responder.success();
        } catch (error) {
            responder.error(error);
        }
    }

    async _isThereUser(userId) {
        return this.userRepository.findByPrimaryKey(userId);
    }

    async _isThereParty(partyId) {
        return this.partyRepository.findByPrimaryKey(partyId);
    }
}

module.exports = { RemovePartyUsecase };
