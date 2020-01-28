const express = require("express");
const cors = require("cors");
const suppliersController = require("./suppliers-controller");
const statesController = require("./states-controller");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/suppliers" , suppliersController);
server.use("/api/states" , statesController);

server.get("*",(request,response)=>{
    response.status(404).json({message: "Route not found."});
});

server.listen(3000 , ()=>{
    console.log("Listening on http://localhost:3000");
});