
var students =[
  { name : "Rayhan",
     age : 26,
    cgpa : 3.50,

},
  { name : "Rafi",
     age : 27,
    cgpa : 3.20,

},
  { name : "tamanna",
     age : 36,
    cgpa : 2.50,

},
  { name : "Toma",
     age : 16,
    cgpa : 3.00,

},
  { name : "Jhuti",
     age : 86,
    cgpa : 1.50,

},

] 





// traditional funtion use kre
// function studentNames(){
//   return students.filter(function(x){
//     return x.cgpa > 3;
//   }).map(function(y){
//     return y.name;
// })




// };

// console.log(studentNames());

// arrow function use kre
// const studentsNames = () =>{
//  return students.filter((x) => x.cgpa >3).map((y) => y.name)
// }
const studentsNames = () => students.filter((x) => x.cgpa >3).map((y) => y.name)


console.log(studentsNames());


