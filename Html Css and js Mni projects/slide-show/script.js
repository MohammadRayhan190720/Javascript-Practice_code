  const slidshowElements = document.querySelectorAll(".slidshow-content");
  // console.log(slidshowElements);


   let count = 1;
  setInterval(() =>{

    count++;

    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");
    if(count > slidshowElements.length){
      slidshowElements[0].classList.add("current");
      count= 1;
    } else{
       currentElement.nextElementSibling.classList.add("current");
    }

  },2000)

