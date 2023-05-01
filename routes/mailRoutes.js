const express=require('express')

const {sendMail, sendDeliveryMail ,sendNotAvail}=require('../controller/mailController')

const router=express.Router();

router.post('/',sendMail);

router.post('/delivered',sendDeliveryMail);

router.post('/notAvail',sendNotAvail)

module.exports=router;