try{
  alert("Hi Everyone");
  alert(x);
  // alert("Goodbye  Everyone");

}catch(error){ 
  console.log("Sorry everyone");
  // error object
  console.log(error);
  console.log(error.name);
  console.log(error.message);

}finally{
  alert("Goodbye  Everyone");
}