class CreatePartyUsecase {
    constructor(partyRepository, userRepository) {
        this.partyRepository = partyRepository;
        this.userRepository = userRepository;
    }

    async execute({userId, party}, responder) {
        try {
            if (!await this._isThereUser(userId)) {
                const error = new Error('USER_DOES_NOT_EXIST');
                return responder.notFound(error);
            }

            const partyToSave = this._buildPartyObject(party, userId);
            const createdParty = await this.partyRepository.create(partyToSave);
            responder.created(createdParty);
        } catch (error) {
            responder.error(error);
        }
    }

    async _isThereUser(userId) {
        return this.userRepository.findByPrimaryKey(userId);
    }

    _buildPartyObject(party, userId) {
        party.user_id = userId;
        return party;
    }
}

module.exports = { CreatePartyUsecase };
