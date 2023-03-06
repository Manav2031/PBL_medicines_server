const express = require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const router = express.Router();

const medicines=require('../model/medicalSchema');

router.get('/med', function (req, res) {
    medicines.find()
    .then(medicines=>{res.json(medicines)})
    .catch((err)=>res.send(err))
})

router.post('/med',function(req,res){
    const newItem=new medicines({
        name:req.body.name,
        quantity:req.body.quantity,
        exp_date:req.body.exp_date,
        description:req.body.description,
        purchase_date:req.body.purchase_date,
    });
    newItem.save().catch(err=>console.log(err))
})

module.exports = router;