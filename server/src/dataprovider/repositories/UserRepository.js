class UserRepository {
    constructor(entity) {
        this.User = entity;
    }

    async create(user) {
        return this.User.create(user);
    }

    async findByPrimaryKey(id) {
        return this.User.findByPk(id);
    }

    async findByEmail(email) {
        return this.User.findOne({ where: { email: email } });
    }

    async findAllParties(id) {
        const { parties } = await this.User.findByPk(id, { include: { association: 'parties' } });
        return parties;
    }
}

module.exports = { UserRepository };
