const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./Data-Base/Db");

connectDB();    

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
    
