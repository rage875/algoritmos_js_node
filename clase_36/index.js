const setupUserModel = require("./schemas/user");
const setupListModel = require('./schemas/list');
const setupItemModel = require('./schemas/item');

module.exports =  async function(config) {
    const UserModel = await setupUserModel(config);
    const ListModel = await setupListModel(config);
    const ItemModel = await setupItemModel(config);

    console.log("User, List, Item model called");

    const user = new UserModel({
        email: "norman2@gmail.com",
        password: "norman1"
    });

    const userList = new ListModel({
        name: "normanList", 
        userId: user._id
    })

    const listItem = new ItemModel({
        name: "task",
        status: true,
        listId: userList._id,
        userId: user._id
    })

    await user.save().then(()=>{console.log("Database user saved")});
    await userList.save().then(()=>{console.log("Database list saved")});
    await listItem.save().then(()=>{console.log("Database item saved")});

    const User = null;
    const List = null;
    const Item = null;

    return {
        User,
        List,
        Item
    };
}