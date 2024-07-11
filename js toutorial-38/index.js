 let link3 = document.getElementsByTagName("a")[0];
 link3.innerHTML="This is a link"
 link3.style.color="green";
 link3.style.fontSize="50px";
 link3.href = "https://www.linkedin.com/notifications/?filter=all";
 







// creat and add HTML Element

// var heading3 = document.createElement("h1");
// var text = document.createTextNode("I Love Bangladesh");

// heading3.appendChild(text);

// var div1 = document.getElementById("my-div");
// div1.appendChild(heading3);

// remove HTML element
// var heading2 = document.getElementsByTagName("h1")[1];
// div1.removeChild(heading2);

//frsit a add 
var div1 = document.getElementById("my-div");

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("I Love my Family");

var heading4 = document.getElementsByTagName("h1")[0];

heading0.appendChild(text0);
// div1.appendChild(heading0);

div1.insertBefore(heading0,heading4);

document.getElementById("my-div").classList.add("my-div2");
document.getElementById("my-div").classList.remove("my-div1");

