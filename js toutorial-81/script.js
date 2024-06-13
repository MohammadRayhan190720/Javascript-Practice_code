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
    resolve("task3 is completed successfully");
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
taskOne()
.then((response)=>console.log(response))
.then(taskTwo)
.then((response)=>console.log(response))
.then(taskThree)
.then((response)=>console.log(response))
.then(taskFour)
.then((response)=>console.log(response))
.then(taskFive)
.then((response)=>console.log(response))
.catch((error) => console.log(error))








