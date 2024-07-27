// initializing some values
let totalAttemps = 5;
let attempts =0;
let totalWons =0;
let totalLost =0;





// selecting element
const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector('#check');
const resultText = cardBody.querySelector(".resultText");
const remainingAttemps = cardBody.querySelector(".remainingAttemps");
const lostWinMessage = document.createElement("P");



form.addEventListener("submit", function(e){
  e.preventDefault();
  // console.log("submit");
  // console.log(guessingNumber.value);
  attempts++;
  if(attempts===5){
    guessingNumber.disabled = true;
    checkButton.disabled = true;

  }if(attempts < 6){
      let guessNumber = Number(guessingNumber.value);
      checkResult(guessingNumber.value);
      remainingAttemps.innerHTML=`Remaining attemps: ${totalAttemps - attempts}`;

  }
  guessingNumber.value = '';

})

const checkResult =(guessingNumber)=>{
  // console.log(guessingNumber);
  const randomNumber = getRandomNumber(5);
  if(guessingNumber == randomNumber){
    resultText.innerHTML = `you have won`;
    totalWons++;

  }else{
    resultText.innerHTML = `You have lost;random number was:${randomNumber}`;
    totalLost++;
  }

  lostWinMessage.innerHTML =`won: ${totalWons}, Lost: ${totalLost}`;
  lostWinMessage.classList.add('large-text');
  cardBody.appendChild(lostWinMessage);

}


const getRandomNumber = (limit) =>{
  return Math.floor(Math.random() * limit)+1;
}