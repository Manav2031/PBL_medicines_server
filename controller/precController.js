const prescription=require('../model/precription.model')
const medicines=require('../model/medicalSchema')

exports.CreatePresc=async (req,res)=>{
    try{
        
        const presc=new prescription({                                 //add prescription to database
            name:req.body.name,
            doctor:req.body.doctor,
            email:req.body.email,
            med:req.body.med
        });
        presc.save()

        res.status(200).json(presc);

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

exports.getPresc=async (req,res)=>{
    id = req.params.id
    const pr1=await prescription.findById(id)
    return res.status(200).json(pr1)
}

exports.orderMed=async (req,res)=>{
    try{
        id = req.params.id
        const pr1=await prescription.findById(id)
        pr1.med.map(async (item)=>{                                  //subtract quantity of ordered medicines from stock
            const filter={name:item.name};
            const update={ $inc: { quantity: -item.quantity } };
            await medicines.findOneAndUpdate(filter,update);
        })
        res.status(200).json({
            delivery:1
        });

    }catch(err){
        return res.status(400).json(err.message)
    }
}