const dal = require("./dal");
const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
    name: String
});

const State = mongoose.model("State", stateSchema, "states");

const suppliersSchema = mongoose.Schema({
    name: String,
    product: String,
    state: {type:mongoose.Schema.Types.ObjectId , ref:"State"}, // forign key
});

const Suppliers = mongoose.model("Suppliers", suppliersSchema, "suppliers");

module.exports = {
    State,
    Suppliers
};