const fsPromises = require("fs/promises");

const saveObjInFile = async (obj) => {
    try{
        const oldData = await fsPromises.readFile("./data.json","utf-8");
        const oldDataArr = JSON.parse(oldData,'[]');

        const idx = oldDataArr.findIndex(({name, price}) => {
            if(name == obj.name && price === obj.price) return true;
        });
        oldDataArr.push(obj);
        await fsPromises.writeFile("./data.json",
            JSON.stringify(oldDataArr)
        )
    } catch(err) {
        console.log("File handeling error : ", err.message);
    }
}

module.exports = {
    saveObjInFile,
}