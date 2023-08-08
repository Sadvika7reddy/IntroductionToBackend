
// const http=require('http')
// const fs=require('fs')
// const path=require('path')
// const result=http.createServer((req,res)=>{
//    const url=req.url
//    const method=req.method
//     if(url==="/"){
      
//       fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
//           if(err){
//             console.log(err)
//           }
//           const date=data
//           res.write('<html>')
//           res.write('<head><title>First Page</title></head>')
          
//           res.write(`<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>`)
//           res.write(`<body>${data}</body>`)
//           res.write('</html>')
//           return res.end();
//       })
      
//     }
//     else if(url==="/message"&& method==="POST"){
//       const body=[]
//       req.on('data',(chunk)=>{
//          console.log(chunk)
//          body.push(chunk)
//       })
//       return req.on('end',()=>{
//          const parseData=Buffer.concat(body).toString();
//          console.log(parseData)
//          const message=parseData.split('=')[1]
//          fs.writeFile('message.txt',message,(err)=>{
//             if(err){
//                console.loh(err)
//             }
//             res.statusCode=302
//             res.setHeader("Location",'/')
            
//             return res.end()
//          })
         
//       })
      
      
//     }
//     else{
//       res.setHeader('Content-Type','text/html')
//     res.write('<html>')
//     res.write('<head><title>First day</title></head>')
//     res.write('<body><h1>hellooo</h1></body>')
//     res.end()
//     }
    

// })
// result.listen(8000)

const http=require('http')
const fs=require('http')
const result=http.createServer((req,res)=>{
   res.setHeader('Content-Type','text/html')
   res.write("<http>")
   res.write("<head><title>Introduction</title></head>")
   res.write(`<body><h1>Welcome ${req.url}</h1><body`)
   res.write('</http>')
   res.end()
})
result.listen(4000)