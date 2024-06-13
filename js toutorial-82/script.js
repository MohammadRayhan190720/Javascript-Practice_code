const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task1 is completed successfully");
  })

};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    reject("task2 is not completed successfully");
  })

};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("task3 is not completed successfully");
  })

};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task4 is completed successfully");
  })

};
const taskFive = () => {
  return new Promise((resolve, reject) => {
    resolve("task5 is completed successfully");
  })

};
// taskOne()
// .then((response)=>console.log(response))
// .then(taskTwo)
// .then((response)=>console.log(response))
// .then(taskThree)
// .then((response)=>console.log(response))
// .then(taskFour)
// .then((response)=>console.log(response))
// .then(taskFive)
// .then((response)=>console.log(response))
// .catch((error) => console.log(error))

const callAllTask = async () =>{
  
  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
    const t5 = await taskFive();
    console.log(t5);
  
    
  } catch (error) {
    console.log(error);
    
  }
};




callAllTask();






