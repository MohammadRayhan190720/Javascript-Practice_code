const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(e){
 if(e.repeat){
  alert("do not repeat");

 }
});
// textarea.addEventListener("keypress", function(e){
//      console.log("keypress");
//       console.log(e.key);
//       console.log(e.code);
// });
// textarea.addEventListener("keyup", function(){
//      console.log("keyup");
// });
textarea.addEventListener("keyup", function(e){
     console.log(e.key);
     console.log(e.code);
     console.log(e.shiftKey);
    if(e.shiftKey);{
      console.log("shift +"+e.key);
    }
});