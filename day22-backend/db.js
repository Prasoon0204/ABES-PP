const mongoose = require("mongoose");

mongoose.connect(

).then(() => {
    console.log("-------- DB Conection Connected ---------");
}).catch((err) => {
    console.log("-------- DB Connection Error: ----------");
    console.log(err.message);
    console.log("----------------------------------------");
})