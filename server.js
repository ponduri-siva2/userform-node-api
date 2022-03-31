const express = require("express")
const cors = require("cors");
const app = express()

const dbConnect = require("./DB/mongoDb");

dbConnect();
app.use(cors());
app.use(express.json());
app.use('/api',require("./api/User"));
app.listen(process.env.port, () => console.log("Started"))