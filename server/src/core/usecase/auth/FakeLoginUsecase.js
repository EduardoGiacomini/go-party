class FakeLoginUsecase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({name, email}, responder) {
        try {
            const user = await this.userRepository.findByNameAndEmail(name, email);
            if (!user) {
                const error = new Error('UNAUTHORIZED');
                return responder.unauthorized(error);
            }
            responder.success(user);
        } catch (error) {
            responder.error(error);
        }
    }
}

module.exports = { FakeLoginUsecase };
