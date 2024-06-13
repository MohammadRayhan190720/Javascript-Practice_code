// for(var i=0; i<3;i++) {
//   document.querySelectorAll(".my-button")[i].addEventListener("click", function(){
//       var text = this.innerHTML;
      

//       switch(text){
//         case "a":
//           var audio = new Audio("sounds/audio-1.mp3");
//           audio.play();
//           break;
//         case "b":
//           var audio = new Audio("sounds/audio-1.mp3");
          
//           audio.play();
//           break;
//         case "c":
//           var audio = new Audio("sounds/audio-1.mp3");
//           audio.play();
//           break;
//       }

      
//     })
  
//   }


  // function use
  for(var i=0; i<3;i++) {
    document.querySelectorAll(".my-button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        audioPlay(text);

    })

  }

  function audioPlay(text){
    
    switch(text){
      case "a":
        var audio = new Audio("sounds/audio-1.mp3");
        audio.play();
        break;
      case "b":
        var audio = new Audio("sounds/audio-1.mp3");
        
        audio.play();
        break;
      case "c":
        var audio = new Audio("sounds/audio-1.mp3");
        audio.play();
        break;
    }



  }