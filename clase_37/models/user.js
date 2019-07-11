const Sequelize = require("sequelize");
const setupDatabase = require("../lib/db");

module.export = function setupUserModel (config) {
    const sequelize = setupDatabase(config);
    let User = sequelize.define("user", {
        email : {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING
        }
    })

    // Middleware para normalizacion de datos
    // como que el correo este en minusculas etc
    User.beforeCreate(async (model, option) => {
        console.log("Before", model);
        console.log(option);

        if("norman3@gmail.com"=== model.mail){
            let err = new Error("Correo prohibido");
            throw err;
        }
    })

    User.afterCreate((model) => {
        console.log("After", model.toJSON());
    })

    // Cuando mandas llamar el .save
    User.beforeUpdate((model) => {
        console.log("Before update", model.toJSON());
    })

    // Cuando mandas llamar el .update
    User.beforeBulkUpdate((model) => {
        console.log("Before bulk update", model.toJSON());
    })

    return User;
}