const mongoose = require('mongoose');
const table_manager = new mongoose.Schema({
    userId:{type:String},
    username:{type:String},
    information:[{
    email:{type:String},
    senha:{type:String},
    fullName:{type:String},
    phone:{type:String}
   }],
    dateLogin:{type:Date, default:Date.now},
});

module.exports = mongoose.model('manager_user', table_manager)