// creat and add HTML Element

// var heading3 = document.createElement("h1");
// var text = document.createTextNode("I Love Bangladesh");

// heading3.appendChild(text);

var div1 = document.getElementById("my-div");
// div1.appendChild(heading3);

// remove HTML element
// var heading2 = document.getElementsByTagName("h1")[1];
// div1.removeChild(heading2);

//frsit a add 
var div1 = document.getElementById("my-div");

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("I Love my Family");

var div1 = document.getElementById("my-div");

heading0.appendChild(text0);
var heading4 = docuemnt.getElementsByTagName("h1")[0];
div1.insertBefore(heading0,heading4);