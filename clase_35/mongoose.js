const mongoose =  require("mongoose");
const Schema = mongoose.Schema;
let db =  mongoose.connect("mongodb://localhost/db");

let user = new Schema({
    name : String,
    last_name: String
})

let UserModel = mongoose.model("User", user);
let record = new UserModel();

record.name = "UserName";
record.last_name = "UserLastName";

record.save((err) => {
    if(err) console.log;
    // param: users - Response array of objects
    // {} Find criteria - {name: "Antonio"}
    UserModel.find({}, (err, users) => {
        if(err) console.log;
        for(let i=0, count = users.length; i < count; i++){
            let user = users[0];
            console.log(`User => _id: ${user._id}, name: ${user.name}, lastName: ${user.last_name}`);
        }
    })
})