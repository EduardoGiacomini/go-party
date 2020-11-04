const { CreateUserFactory } = require("./user/CreateUserFactory");

const { CreatePartyFactory } = require("./party/CreatePartyFactory");
const { FindAllPartiesFactory } = require("./party/FindAllPartiesFactory");

module.exports = {
    factories: [
        CreateUserFactory,

        CreatePartyFactory,
        FindAllPartiesFactory
    ]
};
