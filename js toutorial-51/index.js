var div = document.querySelector(".my-div");
div.addEventListener('click', function(e){
  console.log("clicked");
  console.log(e.target);
  console.log(e.target.className);
  // console.log(e.target.innerHTML);
  // console.log(e.target.textContent);
  console.log(e.target.innerText);
})

// datails about click
// const buttons = document.querySelectorAll(".btn");
// console.log(buttons);
// Array.from(buttons).map((button) =>
// button.addEventListener("click", function(e){
//   console.log("clicked");
//   console.log(e.target.innerText);

// }))





// div.addEventListener('dblclick', function(){
//   console.log("dblclicked");

// })
// div.addEventListener('mousedown', function(){
//   console.log("mousedown");

// })
// div.addEventListener('mouseup', function(){
//   console.log("mouseup");

// })
// div.addEventListener('mouseenter', function(){
//   console.log("mouseenter");

// })
// div.addEventListener('mouseleave', function(){
//   console.log("mouseleave");

// })
// div.addEventListener('mousemove', function(){
//   console.log("mousemove");

// })

// datails about mouseover
// div.addEventListener('mouseover', function(e){
//   console.log("clientX = " + e.clientX + " clientY = " + e.clientY);

// })
// div.addEventListener('mouseover', function(e){
//   console.log("offsetX = " + e.offsetX + " offsetY = " + e.offsetY);

// })