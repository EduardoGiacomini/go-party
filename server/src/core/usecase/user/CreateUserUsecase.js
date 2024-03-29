class CreateUserUsecase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(user, responder) {
        try {
            if (await this._isThereAnyUserWithSameEmail(user.email)) {
                throw new Error('DUPLICATED_USER');
            }

            const createdUser = await this.userRepository.create(user);
            responder.created(createdUser);
        } catch (error) {
            responder.error(error);
        }
    }

    async _isThereAnyUserWithSameEmail(email) {
        return this.userRepository.findByEmail(email);
    }
}

module.exports = { CreateUserUsecase };
