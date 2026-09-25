const express=require('express')
const { getallusers } = require('../controllers/user.controller')
const router=express.Router()

router.get('/getusers',getallusers)

module.exports=router