// console.log("Hello World")
let Product=(num1,num2)=>{
    return num1*num2
}

console.log(Product(4,5))
const student={
    name:"sadvika",
    age:23,
    marks:53,
    eligible(){
        console.log(this.marks)
    }
}
student.eligible()