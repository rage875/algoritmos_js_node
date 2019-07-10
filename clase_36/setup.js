const db = require("./");

async function setup() {
    const config = {
        host: "localhost",
        port: 27017,
        db: 'juan'
    }

    await db(config);
    process.exit(0);
}

setup().catch(err => {
    console.log(err.message);
    console.log(err.stack);
    process.exit(1);
})