// function addNumbers(x,y,z){
//   return x+y+z;
// }
// let numbers= [1,2,3];
// console.log(addNumbers(numbers[0],numbers[1],numbers[2]));
// useing spread operator
// function addNumbers(x,y,z){
//   return x+y+z;
// }
// let numbers= [1,2,3];
// console.log(addNumbers(...numbers));
// function addNumbers(x,y,z){
//   return x+y+z;
// }
// let numbers= [1,2,3];
// let numbers1 =[4,5,...numbers];
// console.log(numbers1);

// array concate useing spread operator
// function addNumbers(x,y,z){
//   return x+y+z;
// }
// let numbers1= [1,2,3];
// let numbers2 =[4,5,6];
// let numbers = [...numbers1,...numbers2];
// console.log(numbers);

// object concate useing spread operator

let p1 = {
  name  : "Rayhan",
  age : 24,
}
let p2 = {
  country : "Bangladesh",
  job : "Teacher",
}
let p ={...p2, ...p1};
console.log(p);
