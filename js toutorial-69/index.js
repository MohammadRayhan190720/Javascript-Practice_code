// for ...of

// const names = ["s1", "s2", "s3"];
// for(let name of names){
//   console.log(name);
// }

// for ...in
// let students = {
//   ID : 101,
//   name : "Rayhan",
//   cgpa : 3.50,
// }
// for(let x in students){
//   // console.log(x); //keyprint
//   // console.log(students[x]); //valueprint
//   console.log(`${x}, ${students[x]}`);//kew and valueprint
// }

const studentInfo = {
  name : "Rayhan",
  age : 24,
  cgpa: 3.40
}
for (let x in studentInfo){
  console.log(`${x} , ${studentInfo[x]}`);
}
