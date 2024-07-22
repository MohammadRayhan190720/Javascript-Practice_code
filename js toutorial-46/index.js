for ( var i=0; i<3; i++ ){
  document.querySelectorAll(".my-button")[i].addEventListener("click", function(){
   var text = this.innerHTML;
   playAudio(text);
   animation(text);

  });
}



function playAudio(text){
  switch(text){
    case "a":
      var audio = new Audio("sounds/audio-1.mp3");
      audio.play();
    case "b":
      var audio = new Audio("sounds/audio-1.mp3");
      audio.play();
    case "c":
      var audio = new Audio("sounds/audio-1.mp3");
      audio.play();


  }


}


function animation(text){
  
  var selectButton=  document.querySelector("."+ text);
  selectButton.classList.add("anim");
  
  setTimeout(function(){
    selectButton.classList.remove("anim");
  
  
  }, 1000)
  
  }

  // add keypress listener
document.addEventListener("keypress", function(event)
{
  var text = event.key;
  playAudio(text);
  animation(text);
})

// keypress listener program
// document.addEventListener("keypress", function(event){
//   var text = event.key;
//   document.querySelector("p").innerHTML = "You have passed"+ "<br>" + text;
// })


// keypress listener program
var count = 0;
document.addEventListener("keypress", function(event){
  var text = event.key;
  count++;
  document.querySelector("p").innerHTML = "You have passed"+"<br>" + count;
})

