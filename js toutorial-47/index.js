//input tag change event
// const input = document.querySelector("input");
// input.addEventListener('change',changeHandler);

// function changeHandler(e){
//   console.log("changed");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.target.className);
//   console.log(e.target.id);
//   console.log(e.target.value);

// }

// select tag change event
// const depertment = document.querySelector("#depertment");
// console.log("depertment");
// depertment.addEventListener('change',depertmentHandler);

// function depertmentHandler(e){
//   console.log("selected");
//   console.log(e.target.value);
// }

// checkbox and change event

const programs = document.querySelectorAll('input[name=program]');
console.log(programs);

Array.from(programs).map((program) =>
  program.addEventListener('change',programHandler)


);
function programHandler(e){
  console.log("checked");
  if(e.target.checked){
    console.log("checked");
    console.log(e.target.value);
  }

}