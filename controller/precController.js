const prescription=require('../model/precription.model')
const medicines=require('../model/medicalSchema')

exports.CreatePresc=async (req,res)=>{
    try{
        const presc=new prescription({
            name:req.body.name,
            quantity:req.body.quantity
        });
        presc.save()
        const filter={name:presc.name};
        const update={ $inc: { quantity: -presc.quantity } };
        await medicines.findOneAndUpdate(filter,update);
        res.status(200).send("Order delivered");

    }catch(err){
        return res.status(400).json(err.message)
    }
}

exports.getPrescData=(req,res)=>{
    try{
        prescription.find()
            .then(pr=>{res.json(pr)})
    }catch(err){
        return res.status(400).json(err.message)
    }
}