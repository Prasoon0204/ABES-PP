const express = require('express');

const productRouter = express.Router();

productRouter.get("/",(req,res) => {
    console.log("Request Received");
    res.json({
        status:"fail",
        message: "work in progress"
    })
})

module.exports={
    productRouter
}