const medicines=require('../model/medicalSchema');
const {filterMedByQty,filterMedByDate}=require('../middleware/medMiddleware');
exports.getAllMed=(req,res)=>{
    try{
        filterMedByDate();
        filterMedByQty();
        medicines.find()
            .then(medicines=>{res.json(medicines)})
    }catch(err){
        return res.status(400).json(err.message)
    }
}

exports.CreateMed=(req,res)=>{
    try{
        const newItem=new medicines({
            name:req.body.name,
            quantity:req.body.quantity,
            exp_date:req.body.exp_date,
            price:req.body.price,
            description:req.body.description,
            purchase_date:req.body.purchase_date,
        });
        newItem.save().then(medicines=>{res.json(medicines)}).catch((err)=>res.status(400).send(err.message))
    }catch(err){
        return res.send(400).json(err.message);
    }
}