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