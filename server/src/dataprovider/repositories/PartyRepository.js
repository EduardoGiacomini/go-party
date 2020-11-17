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

    async countByPrimaryKey(id) {
        return this.Party.count({ where: { id } });
    }

    async countByPrimaryKeyAndUserId(id, user_id) {
        return this.Party.count({ where: { id, user_id } });
    }

    async remove(id, user_id) {
        await this.Party.destroy({ where: { id, user_id } });
    }

    async update(id, user_id, party) {
        await this.Party.update(party, { where: { id, user_id } });
    }
}

module.exports = { PartyRepository };
