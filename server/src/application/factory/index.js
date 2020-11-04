const { CreatePartyFactory } = require("./party/CreatePartyFactory");
const { CreateUserFactory } = require("./user/CreateUserFactory");

module.exports = {
    factories: [
        CreatePartyFactory,
        CreateUserFactory
    ]
};
