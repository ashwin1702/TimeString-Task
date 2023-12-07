const Sequelize = require("sequelize");

const sequelize = new Sequelize("new_schema2", "root", "Ashwin@45", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
