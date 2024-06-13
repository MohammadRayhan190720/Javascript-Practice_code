const video = document.querySelector("video");
video.addEventListener("canplay",function(){
    console.log("canplay");


});
const video1 = document.querySelector("video");
video1.addEventListener("play",function(){
    console.log("play");


});
const video2 = document.querySelector("video");
video2.addEventListener("playing",function(){
    console.log("playing");


});
const video3 = document.querySelector("video");
video3.addEventListener("pause",function(){
    console.log("pause");


});
const video4 = document.querySelector("video");
video4.addEventListener("ended",function(){
    console.log("Thanks for watching this video");


});
const video5 = document.querySelector("video");
video5.addEventListener("volumechange",function(){
    console.log("volumechange");


});