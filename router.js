  const fs=require('fs')
  const routerHandle=((req,res)=>{
    const url=req.url
    const method=req.method
     if(url==="/"){
       
       fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
           if(err){
             console.log(err)
           }
           const date=data
           res.write('<html>')
           res.write('<head><title>First Page</title></head>')
           
           res.write(`<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>`)
           res.write(`<body>${data}</body>`)
           res.write('</html>')
           return res.end();
       })
       
     }
     else if(url==="/message"&& method==="POST"){
       const body=[]
       req.on('data',(chunk)=>{
          console.log(chunk)
          body.push(chunk)
       })
       return req.on('end',()=>{
          const parseData=Buffer.concat(body).toString();
          console.log(parseData)
          const message=parseData.split('=')[1]
          fs.writeFile('message.txt',message,(err)=>{
             if(err){
                console.loh(err)
             }
             res.statusCode=302
             res.setHeader("Location",'/')
             
             return res.end()
          })
          
       })
       
       
     }
     else{
       res.setHeader('Content-Type','text/html')
     res.write('<html>')
     res.write('<head><title>First day</title></head>')
     res.write('<body><h1>hellooo</h1></body>')
     res.end()
     }
     
 
  })
  module.exports=routerHandle
//   module.exports={
//     handle:routerHandle
//   }
//   module.exports.handle=routerHandle
 