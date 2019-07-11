const Sequelize = require("sequelize");
const setupDatabase = require("../lib/db");

module.export = function setupListModel (config) {
    const sequelize = setupDatabase(config);
    let List = sequelize.define("list", {
        name: {
            type: Sequelize.STRING
        }
    })

    return List;
}