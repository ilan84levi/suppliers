const express = require("express");
const suppliersLogic = require("./states-logic");

const router = express.Router();

router.get("/", async (request, response) => {
    try {
        const states = await suppliersLogic.getAllStates();
        response.json(states);
    }
    catch (err) {
        response.status(500).json(err);
    }
});

module.exports = router;