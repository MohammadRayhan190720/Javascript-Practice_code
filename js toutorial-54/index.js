// const input = document.querySelector("input");
// input.addEventListener("copy", function(){
//   console.log("Copyed");
// })
// input.addEventListener("paste", function(){
//   console.log("pasted");
// })
// input.addEventListener("cut", function(){
//   console.log("Cuted");
// })
 const input = document.querySelector("input");
const p = document.querySelector("p");
input.addEventListener("copy", function(e){
  p.innerText = "You have copied";
})
input.addEventListener("paste", function(e){
  p.innerText = "You have pasted";
})
input.addEventListener("cut", function(e){
  p.innerText = "You have cuted";
})