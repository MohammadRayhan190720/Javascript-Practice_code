// default parameter

function message(text = "This is default peremater"){
  console.log(`${text}`);

}
message();
message("I Love Javascript");

// rest parameter
function sum(x,y, ...z){
  console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
sum(10,20,30,4,50);