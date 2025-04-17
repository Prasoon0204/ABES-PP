const fs = require("fs/promises");
const { ulid } = require("ulid");

const saveProductInDB = async (obj) => {
    obj.id = ulid();
    const arr = await getProductsArray(obj);
    arr.push(obj);
    saveProductsArray(arr);
}

const saveProductsArray = (arr) => {
    fs.writeFile("./data.json",JSON.stringify(arr));
};

const getProductsArray = async (obj) => {
    const str = await fs.readFile("./data.json");
    const arr = JSON.parse(str);
    return arr;
};

module.exports = {
    saveProductInDB,
}