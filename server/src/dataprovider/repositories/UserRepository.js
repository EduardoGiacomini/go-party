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
}

module.exports = { UserRepository };
