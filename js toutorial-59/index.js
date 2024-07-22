// const clock = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// clock.addEventListener("click",startClock);

// function startClock() {
//   let date = new Date;
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   hours = formatTime(hours);
//   minutes = formatTime(minutes);
//   seconds = formatTime(seconds);


//   let time = hours +":" + minutes + ":" + seconds;


//   message.textContent = time;
//   setInterval(startClock,1000);
// }

// function formatTime(value){

//   if(value<10){
//     value = "0" + value;
//   }
//   return value;


// };

const clock = document.querySelector(".save-btn");
const message = document.querySelector(".message");

clock.addEventListener("click",startClock);

function startClock(){
   let date = new Date;
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();


   hours = formatTime(hours);
   minutes = formatTime(minutes);
   seconds = formatTime(seconds);


   let time = hours +":" + minutes + ":" + seconds;

   message.textContent = time;
   setInterval(startClock, 1000);
}
  
function formatTime(value){
   if(value<10){
      value = "0" + value;
   }
   return value;

};

