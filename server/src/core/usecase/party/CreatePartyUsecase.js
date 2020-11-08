const _ = require("lodash");

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
        const usersCount = await this.userRepository.countByPrimaryKey(userId);
        return usersCount > 0;
    }

    _buildPartyObject(party, userId) {
        const partyToSave = _.clone(party);
        partyToSave.user_id = userId;
        return partyToSave;
    }
}

module.exports = { CreatePartyUsecase };
