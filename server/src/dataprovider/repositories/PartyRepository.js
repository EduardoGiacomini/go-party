class PartyRepository {
    constructor(entity) {
        this.Party = entity;
    }

    async create(party) {
        return this.Party.create(party);
    }

    async findByPrimaryKey(id) {
        return this.Party.findByPk(id);
    }

    async findByPrimaryKeyAndUserId(id, user_id) {
        return this.Party.findOne({ where: { id, user_id } });
    }

    async remove(id, user_id) {
        await this.Party.destroy({ where: { id, user_id } });
    }

    async update(id, user_id, party) {
        return this.Party.update(party, { where: { id, user_id } });
    }
}

module.exports = { PartyRepository };
