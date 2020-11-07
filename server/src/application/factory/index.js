const { CreateUserFactory } = require("./user/CreateUserFactory");

const { CreatePartyFactory } = require("./party/CreatePartyFactory");
const { FindAllPartiesFactory } = require("./party/FindAllPartiesFactory");
const { RemovePartyFactory } = require("./party/RemovePartyFactory");
const { UpdatePartyFactory } = require("./party/UpdatePartyFactory");

module.exports = {
    factories: [
        CreateUserFactory,

        CreatePartyFactory,
        FindAllPartiesFactory,
        RemovePartyFactory,
        UpdatePartyFactory
    ]
};
