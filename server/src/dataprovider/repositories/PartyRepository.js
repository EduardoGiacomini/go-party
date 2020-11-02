class PartyRepository {
    constructor(entity) {
        this.Party = entity;
    }

    async create(party) {
        return this.Party.create(party);
    }
}

module.exports = { PartyRepository };
