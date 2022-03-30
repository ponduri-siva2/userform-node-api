const express = require("express")
const app = express()

const dbConnect = require("./DB/mongoDb");

dbConnect();
app.use(express.json());
app.use('/api/users',require("./api/User"));
app.listen(process.env.port, () => console.log("Started"))