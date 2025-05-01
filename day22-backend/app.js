require("dotenv").config();
require("./src/config/db")
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const port = 2200;
const {productRouter} = require("./src/api/v1/products/routes/product-routes");

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use("/api/v1/products", productRouter);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})