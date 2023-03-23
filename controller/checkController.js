const medicines=require('../model/medicalSchema')

exports.checkAvailability=(req,res)=>{
    try{
        var checked=1;
        const presc={                                 //add prescription to database
            name:req.body.name,
            doctor:req.body.doctor,
            email:req.body.email,
            med:req.body.med
        };
        presc.med.map(async (item)=>{                                  //subtract quantity of ordered medicines from stock
            const filter={name:item.name};
            let medItem=await medicines.findOne(filter);
            if(medItem.quantity>=item.quantity){
                checked=0
            }
        })
        res.status(200).json({
            availability:checked
        });

    }catch(err){
        return res.status(400).json(err.message)
    }
}