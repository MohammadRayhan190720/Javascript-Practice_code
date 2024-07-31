// finding element
const fontSize = document.querySelector("#font-size");
const bgColor = document.querySelector("#bg-color");
const resetButton = document.querySelector("#reset-button");
const description = document.querySelector(".description");



const setValues = (changeFont,changeBackground) => {
  fontSize.value = changeFont;
  bgColor.value = changeBackground;
  description.style.fontSize = changeFont;
  description.style.backgroundColor = changeBackground;

};


// local stroage value
const initializValue = () =>{
  const changeFont = localStorage.getItem("fontSize");
  const changeBackground = localStorage.getItem("bgColor");

  if(changeFont && changeBackground){
    setValues(changeFont,changeBackground);
    

  }
  if(!changeFont && !changeBackground){
    setValues("16px","aqua")

  }
  if(!changeFont && changeBackground){
    setValues("16px",changeBackground)

  }
  if(changeFont && !changeBackground){
    setValues(changeFont,"aqua")

  }
}


// chnagefontSize
const changeFontSize = (event) =>{
  const fontChange = event.target.value;
  description.style.fontSize = fontChange;
  localStorage.setItem("fontSize",fontChange);
}
// chnageBgColor
const changeBgColor = (event) =>{
    const BgChange = event.target.value;
  description.style.backgroundColor = BgChange;
  localStorage.setItem("bgColor",BgChange);
}
// resetbutton
const clearAllStyle = (event) =>{
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
  setValues("16px","pink")
};


// addeventlistener
fontSize.addEventListener("change",changeFontSize);
bgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearAllStyle);
initializValue();
