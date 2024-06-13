// document.querySelectorAll(".my-button")[0].addEventListener("click", function(){

//   var text = this.innerHTML;
//   document.querySelector("h1").innerHTML = text + "is clicked";

// });
// document.querySelectorAll(".my-button")[1].addEventListener("click", function(){

//   var text = this.innerHTML;
//   document.querySelector("h1").innerHTML = text + "is clicked";

// });
// document.querySelectorAll(".my-button")[2].addEventListener("click", function(){

//   var text = this.innerHTML;
//   document.querySelector("h1").innerHTML = text + "is clicked";

// });

// loop use kre  

var len = document.querySelectorAll(".my-button").length;

for(var i = 0; i < len; i++) {
  document.querySelectorAll(".my-button")[i].addEventListener("click", function(){

    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked";
  
  })

}