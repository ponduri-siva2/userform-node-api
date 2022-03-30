require('dotenv').config();
const mangoDb = require("mongoose");

const connectDb = async () => {
    await mangoDb.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Db connected")
}

module.exports = connectDb;
