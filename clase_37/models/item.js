const Sequelize = require("sequelize");
const setupDatabase = require("../lib/db");

module.export = function setupItemModel (config) {
    const sequelize = setupDatabase(config);
    let Item = sequelize.define("item", {
        name: {
            type: Sequelize.STRING
        }
    })

    return Item;
}