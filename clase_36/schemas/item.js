const setupDatabases = require('../lib/db');

module.exports = async function setupUser(config) {
    const mongoose =  await setupDatabases(config);
    const Schema = mongoose.Schema;

    let Item = new Schema({
        name: String,
        status: Boolean,
        listId: mongoose.Schema.Types.ObjectId,
        userId: mongoose.Schema.Types.ObjectId
    });

    return mongoose.model('item', Item);
}