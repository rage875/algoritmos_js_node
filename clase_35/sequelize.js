const Sequelize = require("sequelize");
const sequelize = new Sequelize("my_db", "root", "voltSQL!_21", {
    dialect: "mysql",
    logging: s => console.log(s)
});

class User extends Sequelize.Model {}

User.init({
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
}, { sequelize, modelName: "user"})

sequelize.sync()
    .then ( () => User.create({
    username: "Norman",
    birthday: new Date(1995, 01, 02)
    }))
    .then ( res => {
        console.log(res.toJSON())
    })
