
const bodyParser=require('body-parser')

const express=require('express')

const app=express()

app.use(bodyParser.urlencoded({extended:true}))

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"/><button type="submit">send</button></form>')
    // console.log
})

app.use('/product',(req,res,next)=>{
    
     console.log(req.body)
     res.redirect('/')   
})



   
app.listen(4000)

