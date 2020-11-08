class FindAllPartiesUsecase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId, responder) {
        try {
            if (!await this._isThereUser(userId)) {
                const error = new Error('USER_DOES_NOT_EXIST');
                return responder.notFound(error);
            }

            const parties = await this.userRepository.findAllParties(userId);
            responder.success(parties);
        } catch (error) {
            responder.error(error);
        }
    }

    async _isThereUser(userId) {
        const usersCount = await this.userRepository.countByPrimaryKey(userId);
        return usersCount > 0;
    }
}

module.exports = { FindAllPartiesUsecase };
