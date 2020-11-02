require("dotenv").config();
const { ApplicationFactory } = require("./application/Application");

const app = ApplicationFactory.create();
app.start();
