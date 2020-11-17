class FindPartyByIdUsecase {
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

            const party = await this.partyRepository.findByPrimaryKeyAndUserId(partyId, userId);
            responder.success(party);
        } catch (error) {
            responder.error(error);
        }
    }

    async _isThereUser(userId) {
        const usersCount = await this.userRepository.countByPrimaryKey(userId);
        return usersCount > 0;
    }
}

module.exports = { FindPartyByIdUsecase };
