document.querySelector(".btn").addEventListener("click", function(){
//  console.log("clicked");


var num = document.querySelector("#input-text").value;
try{
  if(num < 5)
    {
      throw "input is too low";
    }
    else if (num > 10)
      {
        throw "input is too high";
      }


}catch(error){
  console.log(error);

}
})
