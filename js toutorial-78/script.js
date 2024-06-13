// synchronous vs asynchronous

const taskOne = () => {
  console.log(taskOne);
};

const dataLoading = () =>{
  console.log("task2. Data Loading");
};
const taskTwo = () => {
  setTimeout(dataLoading,2000);
 
};

const taskThree = () => {
  console.log("task3");

};
const taskFive = () => {
  console.log("task5");
};
const taskFour = () => {
  console.log("task4");
};


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();