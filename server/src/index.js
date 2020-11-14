require("dotenv").config();
const { ApplicationFactory } = require("./application/Application");

const app = ApplicationFactory.create(process.env.HOST, process.env.PORT);
app.start();
