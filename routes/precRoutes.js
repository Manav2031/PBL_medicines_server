const express = require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const router = express.Router();

const {getPrescData,CreatePresc}=require('../controller/precController')
//POST a new prescription
router.post('/',CreatePresc);

router.get('/',getPrescData);
module.exports=router;