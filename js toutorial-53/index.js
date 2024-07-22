const input = document.querySelector("input");
// input.addEventListener("blur",function(){
//   console.log("blur");
// })
// input.addEventListener("focus",function(){
//   console.log("focus");
// })
// input.addEventListener("focusin",function(){
//   console.log("focusin");
// })
// input.addEventListener("focusout",function(){
//   console.log("focusout");
// })

// const input = document.querySelector("input");
input.addEventListener("blur",function(){
  // console.log("blur");
  input.style.backgroundColor= "green";
  input.style.padding= "5px";
  console.log(e.target.value);
  input.value= e.target.value.toUpperCase();
})
input.addEventListener("focus",function(){
  // console.log("focus");
  input.style.backgroundColor= "orange";
  input.style.padding= "10px";
})