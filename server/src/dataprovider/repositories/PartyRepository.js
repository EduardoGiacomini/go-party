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

    async remove(user_id, id) {
        await this.Party.destroy({ where: { id, user_id } });
    }
}

module.exports = { PartyRepository };
