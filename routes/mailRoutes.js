const express=require('express')

const router=express.Router();

router.post('/',function(req,res){
    res.send("Mail sent successfully");
})