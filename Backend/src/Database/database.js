const mongoose = require("mongoose");

function connectToDatabase(){
    mongoose.connect(process.env.Mongoose_Url)
    .then (()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log("not connected" ,err);
        console.log(process.env.Mongoose_Url)
    })
}

module.exports = connectToDatabase
