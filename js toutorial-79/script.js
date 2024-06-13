// callback and higher order function
// function square(x){
//   console.log(`square of ${x}: ${x*x}`);
// }
// square(6);
// const y = square;
// y(5);
 

// function higherOrderFunction(num,callback){
//    callback(num)
// }

// higherOrderFunction(6,square);











const taskOne = (callback) => {
  console.log("task1");
      callback();
};


const taskTwo = (callback) => {
   setTimeout(() =>{
    console.log("task2. Data Loading");
    callback();
  },2000);
 
};

const taskThree = (callback) => {
  console.log("task3");
  callback();

};
const taskFive = (callback) => {
  console.log("task5");
  callback();
};
const taskFour = () => {
  console.log("task4");
};


taskOne(()=>{    //function ar name na like o hbe
  taskTwo(function f2(){
    taskThree(function f3(){
      taskFive(function f5(){
        taskFour();

      });

    });
  });
});
