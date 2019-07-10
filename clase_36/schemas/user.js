const setupDatabases = require('../lib/db');

module.exports = async function setupUser(config) {
    const mongoose =  await setupDatabases(config);
    const Schema = mongoose.Schema;

    let User = new Schema({
        email: String,
        password: String
    });

    // arrow function llega al scope global
    // por lo que para este caso se debe usar function en vez de 
    // arrow function
    User.pre('save', function (next) {
        console.log("Pre save middleware");
        console.log(this);

        if(!this.email) {
            let err =  new Error("Error email not exist");
            next(err);
        }

        next();
    })

    User.post('save', async function () {
        console.log("Post save middleware");
        return true;
    })

    return mongoose.model('User', User);
}