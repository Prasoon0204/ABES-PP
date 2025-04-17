const PORT = 2100;
const express = require('express');
const { saveLog, requestLog } = require('./logger');
const fs = require("fs/promises");
const { saveProductInDB } = require('./db');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    requestLog(req);
    next();
})

app.get("/", (req, res) => {
    requestLog(req);
    res.json({
        status: "success",
        message: `server is running on port ${PORT}`,
    });
});

app.post("/products", async (req, res) =>{
    try{
        await saveProductInDB(req.body);
        res.json({
            status: "success",
            message: "Product stored!",
        });
    } catch(err){
        console.log("/products", err.message);
        res.status(500);
        res.json({
            status: "Fail",
            message: "Something went wrong...",
        })
    }
});

app.use((req, res, next) => {
    res.status(404);
    res.json({
        status: "fail",
        message: "You are trying to access a route which is not defined yet",
    })
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})