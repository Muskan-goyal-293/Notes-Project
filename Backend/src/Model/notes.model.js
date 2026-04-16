 const mongoose = require("mongoose");

 const notesSchema = new mongoose.Schema({
    title : String,
    des : String
 })

 const notesModel = mongoose.model("notes" , notesSchema);


 module.exports = notesModel;