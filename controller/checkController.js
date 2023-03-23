const medicines=require('../model/medicalSchema')

exports.checkAvailability=(req,res)=>{
    try{
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
                 res.status(201).json({
                    availability:0
                })
                return
            }
        })
        res.status(200).json({
            availability:1
        });

    }catch(err){
        return res.status(400).json(err.message)
    }
}