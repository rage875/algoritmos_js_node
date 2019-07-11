const setupDatabase = require("./lib/db");
const setupUserModel = require("./models/user");
const setupListModel = require("./models/list");
const setupItemModel = require("./models/item");

module.exports = async function (config) {
    const sequelize = setupDatabase(config);
    const userModel = setupUserModel(config);
    const ListModel = setupListModel(config);
    const ItemModel = setupItemModel(config);

    userModel.hasMany(ListModel);
    ListModel.belongsTo(userModel, {as: 'equipo', foreignKey: "equipoId"});

    if(config.setup) {
        // Forzar a borrar las tablas de la base de datos si existe
        // correr primera vez para realizar los esquemas
        await sequelize.sync({force: true});
        // Alterar la base las tables de la base de datos si existe
        await sequelize.sync({alter: true});
    }

    await sequelize.authenticate();

    // Crear base de datos e insertar los valores automaticamente
    let user = await userModel.create({
        email: "norman1@gmail.com",
        password: "1234"
    });

    // Realizar busquedas - trae el mismo elemento
    let user = await userModel.findOne({});
    let user = await userModel.findOne({
        where: {email: "norman2@gmail.com"};
    })

    // Tambien se puede modificar de la siguiente manera
    // Primero obteniendo el objeto deseado y luego actualizarlo
    // nada mas que debe estar desabilitado el query_raw en el segup.js
    user.password = "12233"
    await user.save()

    // Traerte todos los elementos
    let users = await userModel.findAll({});

    // Actualiar algun valor
    let user = await userModel.update({
        password: "123455"
    },{
        where: {email:"norman2@gmail.com"}
    })

    console.log(user.toJSON())

}