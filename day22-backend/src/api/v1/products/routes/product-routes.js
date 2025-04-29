const express = require('express');
const { getProductsController } = require("../controllers/getProductsController");
const { createProductController } = require("../controllers/postProductController");
const { validateCreateProductDto } = require('../dto/validateCreateProductDto');

const productRouter = express.Router();

productRouter.get("/", getProductsController);
productRouter.post("/", 
    validateCreateProductDto,
    createProductController
);

module.exports={
    productRouter,
};