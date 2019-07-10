const setupDatabases = require('../lib/db');

module.exports = async function setupUser(config) {
    const mongoose =  await setupDatabases(config);
    const Schema = mongoose.Schema;

    let List = new Schema({
        name: String,
        userId: mongoose.Schema.Types.ObjectId
    });

    return mongoose.model('list', List);
}