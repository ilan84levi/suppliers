const express = require("express");
const suppliersLogic = require("./suppliers-logic");

const router = express.Router();

router.get("/" , async(request,response) => {
    try{
        const suppliers = await suppliersLogic.getAllSuppliers();
        response.json(suppliers);
    }
    catch (err) {
        response.status(500).json(err);
    }
});

router.post("/", async (request,response)=>{
    try{
        const supplier = request.body;
        const suppliers = await suppliersLogic.addSupllier(supplier);
       response.status(200).json(suppliers);
    }
    catch (err) {
        response.status(500).json(err);
    }
});

module.exports = router;