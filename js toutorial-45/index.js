for (var i = 0; i<3; i++) {
  document.querySelectorAll(".my-button")[i].addEventListener("click",function() {
    var text = this.innerHTML;
    console.log(text);
    audioPlay(text);
    animation(text);

    

  }
)

}

function audioPlay(text){
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