require("dotenv").config() 
const {app , port} = require("./src/app");
const connectToDatabase = require("./src/Database/database");
connectToDatabase()


app.listen(port,()=>{
    console.log("server is running");
})