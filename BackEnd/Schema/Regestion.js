const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const RegSchema = new Schema({


    // date:{type:Date,required:true},
    CompanyName:{type:String,required:true},
    CompanyAdress:{type:String,required:true},
    Email:{type:String,required:true},
    Cphone:{type:String,required:true},
    job:{type:String,required:true},

    ffacultyName: {type: String,required: true,},
    sfacultyName: {type: String},
    tfacultyName: {type: String}, 
    fofacultyName: {type: String},
    fifacultyName: {type: String},





});
    
module.exports.Reg = mongoose.model('Reg', RegSchema);


    