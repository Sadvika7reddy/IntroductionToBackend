const express=require('express')
const router=express.Router();
const rootDir=require("../util/path")
const path=require('path')

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","contact.html"))
    
})

router.post('/contactDetail',(req,res,next)=>{
    
    console.log(req.body)
    res.redirect('/sucess')   
})
 router.use('/sucess',(req,res,next)=>{
    res.send("<h2>Form succesfully filled</h2>")
 })

module.exports=router;