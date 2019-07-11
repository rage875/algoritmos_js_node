const db = require("./");

async function setup() {
    const config = {
        host: "localhost",
        userName: "root",
        password: "voltSQL!_21",
        dialect: "mysql",
        database: "my_db_new",
        setup: false,
        query: {
            raw: true
        }
    };

    await db(config);

    process.exit(0);
}

setup().catch(err => {
    console.log(err.message);
    console.log(err.stack);
})