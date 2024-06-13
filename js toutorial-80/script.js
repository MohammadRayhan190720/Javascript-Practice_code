// const promise1 = new Promise((resolve,reject)=>{
//   let completePromise = true;
//   if(completePromise){
//     resolve("promise complete successfully")
//   } else{
//     reject("promise1 is rejects")
//   }
// });
// const promise2 = new Promise((resolve,reject)=>{
//   resolve("promise2 complete successfully")
// });

// console.log(promise1);
// promise1.then((response)=>{
//   console.log(response);
// })
// .catch((err)=>{
//   console.log(err);
// });

// promise2.then((response)=>{
//   console.log(response);
// })
// Promise.all([promise1, promise2]).then((response)=>{console.log(response);})

// .catch((err)=>{
//   console.log(err);
// });

//race();
const promise3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Completed promise3")

  },3000);
})
const promise4 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Completed promise4")

  },2000);
})

Promise.race([promise3,promise4]).then((response)=>{console.log(response);});