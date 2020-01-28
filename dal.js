const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/suppliers" , {useNewUrlParser:true},(err,mongoClient)=>{
    if(err) return console.log(err);
    console.log("We're connected to " + mongoClient.name + " database on MongoDB.");
});

mongoose.connect("mongodb://localhost:27017/states" , {useNewUrlParser:true},(err,mongoClient)=>{
    if(err) return console.log(err);
    console.log("We're connected to " + mongoClient.name + " database on MongoDB.");
});

module.exports = {
    mongoose
};