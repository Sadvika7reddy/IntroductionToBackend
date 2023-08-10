const express=require('express')
const router=express.Router();
const rootDir=require("../util/path")
const path=require('path')
const controllerPath=require('../controller/products')
router.get('/contact',controllerPath.getAddProducts)

router.post('/contactDetail',controllerPath.postAddProducts)
 router.use('/sucess',controllerPath.sucessData)

module.exports=router;