document.querySelector("button").addEventListener("click",myFuntion);


function myFuntion(){
alert("this is me");
}

// annonomus function

document.querySelector(".btn1").addEventListener("click",function(){
alert("this is Rayhan");

});

// var myVar=document.querySelector("#myId");
// myVar.addEventListener("mouseover",function(){
//   myVar.classList.add("my-style");
// });

// var myVar=document.querySelector("#myId");
// myVar.addEventListener("mouseout",function(){
//   myVar.classList.remove("my-style");
// });
 const myDatails=document.querySelector("#myId");
 myDatails.addEventListener("mouseover",function(){
        myDatails.classList.add("my-style");
 });
 const myName=document.querySelector("#myId");
 myName.addEventListener("mouseout",function(){
        myName.classList.remove("my-style");
 });

