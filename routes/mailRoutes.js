const express=require('express')

const {sendMail, sendDeliveryMail}=require('../controller/mailController')

const router=express.Router();

router.post('/',sendMail);

router.post('/delivered',sendDeliveryMail);

module.exports=router;