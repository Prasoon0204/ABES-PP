const express = require('express');
const morgan = require('morgan');
const port = 2200;
const {productRouter} = require("./src/api/v1/products/routes/product-routes");

const app = express();

// app.use((req,res,next) => {
//     console.log("----Hello----");
// })

app.use(morgan("dev"));

app.use("/api/v1/products", productRouter);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})