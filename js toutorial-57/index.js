// alert("error hare");



//confirm
// function deletMassage(){
//   let value = confirm("Do you want to Delete this item?");
//   if(value){
//     console.log("deleted");
//   }else{
//     console.log("not-deleted");
//   }
// }
// deletMassage();

// prompt
function welcomeMassage(){
  var h1 = document.createElement("h1");
  let text;



var name = prompt("Enter Your Name hare");
if(name == null || name == ''){
  text = "no name found";

}else{
  text = "welcome "  +  name;
}
var textNode = document.createTextNode(text);
h1.appendChild(textNode);
document.body.appendChild(h1);
}
welcomeMassage();















// function welcomeMessage(){
//  let h1 = document.createElement("h1");
//  let text;




//   let name = prompt("Enter Your Name :");
//   if (name == null || name == "") {
//     text = "no name found";
//   } else{
//     text = "welcome " + name;
//   }
    
//   let textNode = document.createTextNode(text);
//   h1.appendChild(textNode);

//   document.body.appendChild(h1);
// }

// welcomeMessage();







