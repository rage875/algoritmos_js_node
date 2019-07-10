"use strict"
const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "myProject";

// Insert data to db
const insert = (db, callback, inputObj) => {
    const collection = db.collection("documents");
    collection.insertMany(inputObj,
    (err, result) => {
        if(err) console.log(err)
        callback(result);
    });
}

// Perform connection
mongoClient.connect(url, (err, client) => {
    if(err) console.log(err);
    const db = client.db(dbName);
    insert(db, (res) => {
        console.log(res);
        findDB(db, (res) => {
            console.log(res);
            client.close();
        })
    },
    [
        {g : 7}, {h : 8}, {i : 9}
    ])
})

// Find database
const findDB = (db, callback) => {
    const collection = db.collection("documents");
    collection.find({}).toArray((err, docs) => {
        if(err) console.log(err);
        callback(docs)
    });
}

// Run js file: node mongo.js