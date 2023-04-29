const medicines=require('../model/medicalSchema')
const prescription=require('../model/precription.model')

exports.checkAvailability=async (req,res)=>{
    try{
        var checked=true;
        id = req.params.id
        const presc=prescription.find(id)
          
        for(i=0;i<presc.med.length;i++){
            const item=presc.med[i];
            const filter={name:item.name};
            let medItem=await medicines.findOne(filter);
            if(medItem.quantity<=item.quantity){
                checked=false;
                break;
            }
        }

        console.log(checked)
        return res.status(200).json({
            availability:checked
        });

    }catch(err){
        return res.status(400).json(err.message)
    }
}