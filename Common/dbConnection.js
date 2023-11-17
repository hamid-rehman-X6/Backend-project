const config = require("../config.json");

const { Sequelize } = require("sequelize");

const database = new Sequelize(config.db);

database
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(`Error connecting to the database: ${err}`);
  });

module.exports = database;
