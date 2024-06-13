// downwords-querySelector/querySelector
// const studentList = document.querySelector(".studentList");
// const studentA = document.querySelector(".student-a");

const studentList = document.querySelector(".studentList");
const studentA = studentList.querySelector(".student-a");

// downwords-children

const studentList1 = document.querySelector(".studentList");
//studentList1.children
const studentA1 = studentList1.children[0];

// upwords-parentElement
const studentA2 = document.querySelector("li");
const studentList2 = studentA2.parentElement;

//sideways
const studentA3 = document.querySelector("li");
const studentB3 = studentA3.nextElementSibling;
const studentC3 = studentB3.nextElementSibling;

const studentc4 = document.querySelectorAll("li")[2];
const studentB4 = studentc4.previousElementSibling;





// parentElement+Children+index

const studentA5 = document.querySelector("li");
const studentList5 = studentA5.parentElement;
const studentC5 = studentList5.children[2];






