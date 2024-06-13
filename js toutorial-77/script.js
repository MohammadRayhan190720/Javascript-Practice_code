// import {name,setText} from './myModule.js';
// setText ("Goodbye Module ES6");
// console.log(name);
// console.log(setText);

// clases

// class Student{
//   constructor(id,name){
//     this.id = id;
//     this.name = name;
//   }

// }
// let s1 = new Student(101,"anis");
// console.log(s1.name);

// set
// class Student{
//   constructor(id,name){
//     this.id = id;
//     this.name = name;
//   }
//   set studentName(name){
// this.name = name;
//   }

// }
// let s1 = new Student(101,"anis");
// console.log(s1.name);

// s1.studentName = "rayhan";
// console.log(s1.name);

// get
class Student{
  constructor(id,name){
    this.id = id;
    this.name = name;
  }
  get studentInfo(){
   return this.id + " " + this.name;
  }

}
let s1 = new Student(101,"anis");
// console.log(s1.name);


console.log(s1.studentInfo);

