class UserRepository {
    constructor(entity) {
        this.User = entity;
    }

    async create(user) {
        return this.User.create(user);
    }

    async findByEmail(email) {
        const foundUsers = await this.User.findAll({ where: { email: email } });
        const user = foundUsers[0];
        return user;
    }
}

module.exports = { UserRepository };
