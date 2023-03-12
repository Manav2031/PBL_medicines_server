const express = require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const router = express.Router();

//POST a new prescription
router.post('/',function(req,res){
    res.send('hello');
});

router.get('/',function(req,res){
    res.json('hello');
});
module.exports=router;