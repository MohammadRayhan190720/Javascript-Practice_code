// traditional function
// function display1(){
//   console.log("I am display1");
// }
// display1();
// function display1(){console.log("I am display1");}
// display1();

//arrow function
// const display2 = () =>{
//   console.log("I am display2");
// }
// display2();
// const display2 = () =>{console.log("I am display2");}
// display2();
// const display3 = () =>console.log("I am display3");
// display3();

// how to return traditional function
// function message1(){
//   return "I am message1";
// }
// console.log(message1());


// how to return arrow function

// const message2 = () =>{
//   return "I am message2";
// };
// console.log(message2());
// const message2 = () => "I am message2";
// console.log(message2());

// how to pass parameter in traditional function
function add(num1, num2){
  return num1+num2;
}
console.log(add(20,30));





// how to pass parameter in arrow function
// const add1=(num1,num2)=>{return num1+num2;}
// console.log(add1(40,30));
const add1=(num1,num2)=> num1+num2;
console.log(add1(40,30));
