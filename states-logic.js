const models = require("./model");

const State = models.State;

function getAllStates() {
    return new Promise((resolve, reject) => {
        State.find({},(err, states) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(states);
            }
        });
    });
}
module.exports = {
    getAllStates
};