require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/database");
const authRoutes = require("./routes/AUTH/Authroutes");

connectDb()
app.use(express.json());


app.use("/api/auth", authRoutes);

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
    console.log(`Server is alive and active on port ${Port}`)
    console.log("Bring in the requests baby!!!")
})
