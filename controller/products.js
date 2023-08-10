const rootDir=require("../util/path")
const path=require('path')
exports.getAddProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","contact.html"))
    
}
exports.sucessData=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","sucess.html"))
 }
 
 exports.postAddProducts=(req,res,next)=>{
    
    console.log(req.body)
    res.redirect('/sucess')   
}