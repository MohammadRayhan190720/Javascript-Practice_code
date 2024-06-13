// array destructuring
// let numbers = [10,20,30,40,50,60];
// console.log(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);

// let numbers = [10,20,30,40,50,60];
// let [num1,num2,num3,num4] = numbers;
// console.log(num1);
//  use spread poerator
// let numbers = [10,20,30,40,50,60];
// let [num1,num2,...z] = numbers;
// console.log(num1);
// console.log(z);

// swap variables
// let a = 10, b=20 ;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// object destructure
// const studentInfo = {
//   name : "Rayhan",
//   age : 24,
//   gpa : 3.92,
// }
// console.log(studentInfo.name);
// console.log(studentInfo.age);
// console.log(studentInfo.gpa);
// const studentInfo = {
//   name : "Rayhan",
//   age : 24,
//   gpa : 3.92,
// }
// const {name,age,gpa} = studentInfo;
// console.log(name);
// console.log(age);
// console.log(gpa);
// nested object destructure
// const studentInfo = {
//   name : "Rayhan",
//   age : 24,
//   gpa : 3.92,
//   address : {
//     pAddress : "Rangpur",
//     nAddress : "Dhaka",
//   }
// }
// const {name,age,gpa,address} = studentInfo;
// console.log(address.nAddress);

// destructuring function parameter

// const studentInfo = (student) =>{
// console.log(`${student.name},${student.id}`);
// }
// const student = {
//   name : "Rayhan",
//   id : 101,
// }
// studentInfo(student);
const studentInfo = ({name,id}) =>{
console.log(`${name},${id}`);
}
const student = {
  name : "Rayhan",
  id : 101,
}
studentInfo(student);


