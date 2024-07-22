// setTimeout(() =>{
//   console.log("hi");
// },2000);
// setTimeout(display,2000);
// function display(){
// console.log("Display function called")
// };

// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click",saveUser);

// function saveUser(){
//   message.textContent = "you  have registered successfully";

//  setTimeout(()=>{

// message.textContent = "";
//  },3000);

// };
const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click",displayCount);

function displayCount(){
  let count = 1;
  message.textContent = count;

  setInterval(()=>{
  count++;
  message.textContent = count;


},2000);
}



// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click",saveUser);

// function saveUser(){ 
//   message.textContent = "you have registered successfully";

// setTimeout(()=>{
//  message.textContent = " "; 

// },2000);
// };