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

// for (let i=0; i<3; i++) {
//   document.querySelectorAll(".my-button")[i].addEventListener("click", function(){
//      const text = this.innerHTML;
//      console.log(text);


//      switch(text){
      
//       case "a":
//         let audio = new Audio("sounds/audio-1.mp3");
//         audio.play();
//         break;
//       case "b":
//         const audio1 = new Audio("sounds/audio-1.mp3");
//         audio1.play();
//         break;
//       case "c":
//         let audio2 = new Audio("sounds/audio-1.mp3");
//         audio2.play();
//         break;
//      }

// })

// }

for (let i = 0; i <3; i++) {
  document.querySelectorAll(".my-button")[i].addEventListener("click",function(){
  let text= this.innerHTML;
  audioPlay(text);

  
})
}
const audioPlay = (text) =>{

  switch(text){
     case "a":
      let audio = new Audio("sounds/audio-1.mp3");
      audio.play();
      break;

     case "b":
      let audio1 = new Audio("sounds/audio-1.mp3");
      audio1.play();
      break;
     case "c":
      let audio2 = new Audio("sounds/audio-1.mp3");
      audio2.play();
      break;
}

}




  // function use
  // for(var i=0; i<3;i++) {
  //   document.querySelectorAll(".my-button")[i].addEventListener("click", function(){
  //       var text = this.innerHTML;
  //       audioPlay(text);

  //   })

  // }

  // function audioPlay(text){
    
  //   switch(text){
  //     case "a":
  //       var audio = new Audio("sounds/audio-1.mp3");
  //       audio.play();
  //       break;
  //     case "b":
  //       var audio = new Audio("sounds/audio-1.mp3");
        
  //       audio.play();
  //       break;
  //     case "c":
  //       var audio = new Audio("sounds/audio-1.mp3");
  //       audio.play();
  //       break;
  //   }



  // }