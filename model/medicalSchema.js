const mongoose=require('mongoose');

const medicalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:0,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    exp_date:{
        type:Date,
        required:true
    },
    description:{
        type:String
    },
    purchase_date:{
        type:Date,
        default:Date.now
    }
});

medicines=mongoose.model('medicines',medicalSchema);

module.exports=medicines;