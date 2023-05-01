const express=require('express')
const router=express.Router()

const {checkAvailability}=require('../controller/checkController')

router.get('/',checkAvailability)

module.exports=router;