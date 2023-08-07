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
let fruits=["apple","oranges","","mango","","lemon"]
let result=fruits.map((fruit)=>{
    if(fruit==""){
        fruit="empty string"
    }
    else{
        fruit=fruit
    }
    return fruit
})
console.log(result)
