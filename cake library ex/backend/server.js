require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/database");

connectDb()
app.use(express.json());

app.get("/mee", (req, res) => {
    res.send(`Hello there!`)
});

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
    console.log(`Server is alive and active on port ${Port}`)
    console.log("Bring in the requests baby!!!")
})
