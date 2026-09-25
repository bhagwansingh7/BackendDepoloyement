const express = require('express')
const app=express()
const env=require('dotenv').config()
const pool=require('./src/config/db')
const router=require('./src/routes/user.route')
console.log(process.env.PORT)
const PORT=process.env.PORT||4000;
app.use(express.json())
app.use('/api/user',router)
app.get('/',(req,res)=>{
    res.send("hello from server")

})

// app.listen(PORT,()=>{
//     console.log(`app is running on PORT ${PORT}`)
// })

module.exports=app