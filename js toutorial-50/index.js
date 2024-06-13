//load,unload
 //scroll
 //resize
 //toggle-datails

 window.addEventListener("load", function(){
  console.log("loaded");
 })
 window.addEventListener("unload", function(){
  console.log("unloaded");
 })

 
 window.addEventListener("scroll", function(){
  console.log("scroll");

 })
 window.addEventListener("resize", function(){
  const width =window.outerWidth;
  const height =window.outerHeight;
  console.log(`height: ${height},width: ${width}`);

 })
  

 const details = document.querySelector("details");


 details.addEventListener("toggle", function(e){
  console.log("toggle");
  console.log(e.target.open);

 })