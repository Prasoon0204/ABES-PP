const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI,{
    dbName: "Products_Backend_Prime",
}).then(() => {
    console.log("------ MongoDB Connected Successfully ------");
}).catch((err) => {
    console.log("MongoDB connection error:",err.message);
});