var photos = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];
var imgTag = document.querySelector("#my-image");

  
var count = 0;

function next(){
  count++;


  if(count >= photos.length){
    count = 0;
    imgTag.src = photos[count];
  }else {
    imgTag.src = photos[count];
  }


}_

function prev(){
 
  count--;


  if(count <0) {
    count = photos.length-1;
    imgTag.src = photos[count];
  }else {
    imgTag.src = photos[count];
  }
}

