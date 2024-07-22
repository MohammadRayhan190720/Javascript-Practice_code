// shorthand way
function studentInfo(name,age){
  return{
         name,
         age,     //   name:name,
                  //   age:age, 
  }
}
console.log(studentInfo("Rayhan",24));

// consize method

let message = {
    body(){             // body : function(){
    return `I am Object Function`
  }
}

console.log(message.body());

let info = {
    'body name' (){             //function ar modde space thakle 
    return `I am Javascript ES6 Object Function`
  }
}

console.log(info['body name']());

// function studentInfo(name,age){
//   return{
//     name,
//     age,
//   }
// }
// console.log(studentInfo("Rayhan",24));

// let message ={
//   body(){
//     return `I am Javascript ES6 Object Function`
//   }
// }
// console.log(message.body());

// let info = {
//   'body name'(){
//     return `i am a web developer in Javascript and Mern stack`
//   }
// }
// console.log(info['body name']());