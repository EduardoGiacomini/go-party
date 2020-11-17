const { FakeLoginFactory } = require("./auth/FakeLoginFactory");

const { CreateUserFactory } = require("./user/CreateUserFactory");

const { CreatePartyFactory } = require("./party/CreatePartyFactory");
const { FindAllPartiesFactory } = require("./party/FindAllPartiesFactory");
const { FindPartyByIdFactory } = require("./party/FindPartyByIdFactory");
const { RemovePartyFactory } = require("./party/RemovePartyFactory");
const { UpdatePartyFactory } = require("./party/UpdatePartyFactory");

module.exports = {
    factories: [
        FakeLoginFactory,

        CreateUserFactory,

        CreatePartyFactory,
        FindAllPartiesFactory,
        FindPartyByIdFactory,
        RemovePartyFactory,
        UpdatePartyFactory
    ]
};
