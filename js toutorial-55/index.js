// const div = document.querySelector("div");
// const p = document.querySelector("p");

// p.addEventListener("dragstart", function(e){
//   e.dataTransfer.setData("text",e.target.id);
//   // console.log(e.target.id);
// });

// div.addEventListener("dragover",function(e){
//   e.preventDefault();
// });

// div.addEventListener("drop",function(e){
//    const id = e.dataTransfer.getData("text");
//    console.log(id);
//    div.appendChild(document.getElementById(id));
//    e.preventDefault();
// }); 
























const div = document.querySelector("div");
const p = document.querySelector("P");

p.addEventListener("dragstart",function(e){
  e.dataTransfer.setData("text",e.target.id);

});

div.addEventListener("dragover",function(e){
  e.preventDefault();
});

div.addEventListener("drop",function(e){
   const id = e.dataTransfer.getData("text");
   console.log(id);
   div.appendChild(document.getElementById(id));
   e.preventDefault();
}
);