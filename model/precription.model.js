const mongoose = require("mongoose");
const prescriptionSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    quantity:{
      type:Number,
      default:1
    }
  }
);

const prescription = mongoose.model("prescription", prescriptionSchema);
module.exports = prescription;