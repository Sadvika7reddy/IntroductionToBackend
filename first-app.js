
const http=require('http')
const router=require('./router')
const result=http.createServer(router)
   
result.listen(8000)

