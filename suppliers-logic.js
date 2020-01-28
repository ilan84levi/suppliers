const models = require("./model");

const Suppliers = models.Suppliers;

function getAllSuppliers(){
    return new Promise((resolve,reject)=>{
        Suppliers.find({}).populate("state").exec((err,suppliers)=>{
            if(err) reject(err);
            resolve(suppliers);
        }) 
    });
}

// post product
function addSupllier(supp){
    return new Promise((resolve,reject)=>{
        const supplier = new Suppliers(supp);
        supplier.save((err,supplier)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(supplier);
            }
           
        });
    });
}

module.exports = {
    getAllSuppliers,
    addSupllier

};

