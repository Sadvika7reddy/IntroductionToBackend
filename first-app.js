// console.log("Hello World")
// let Product=(num1,num2)=>{
//     return num1*num2
// }

// console.log(Product(4,5))
// const student={
//     name:"sadvika",
//     age:23,
//     marks:53,
//     eligible(){
//         console.log(this.marks)
//     }
// }
// student.eligible()
// let fruits=["apple","oranges","","mango","","lemon"]
// let result=fruits.map((fruit)=>{
//     if(fruit==""){
//         fruit="empty string"
//     }
//     else{
//         fruit=fruit
//     }
//     return fruit
// })
// console.log(result)
// async function Result(){
//     console.log('a');

//     console.log('b');
//     let msg1=await new Promise((resolve,reject)=>{
//         setTimeout(() => resolve('c'), 3000)
    
//     })
//     console.log(msg1)
//     let msg2=await new Promise((resolve,reject)=>{
//         setTimeout(() => resolve('d'), 0)
    
//     })
    
//     console.log(msg2)
//     console.log('e');  
// }
// Result();
const http=require('http')
let name="sadvika"
const result=http.createServer((req,res)=>{
   console.log(name)
})
result.listen(4000)



