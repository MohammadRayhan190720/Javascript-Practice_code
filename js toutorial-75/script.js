// array methods|| find ()|| findIndex ()

let numbers = [50,55,14,78,30];
// let fristEvenNumber = numbers.find(x => x%2===0)
// let fristEvenNumberIndex = numbers.findIndex(x => x%2===0)
// console.log(fristEvenNumber);
// console.log(fristEvenNumberIndex);




// function use kre
// let numbers = [5,55,14,78,30];
// const evenNumber = (value,array,index) =>{
//   if(value %2 ===0)
//     return value;
// }
// let fristEvenNumber = numbers.find(evenNumber)
// let fristEvenNumberIndex = numbers.findIndex(evenNumber)
// console.log(fristEvenNumber);
// console.log(fristEvenNumberIndex);

// object

let student = [
  {name : "Rayhan",
    id : 101,
    gpa : 3.50,
  },

  {name : "Rafi",
    id : 102,
    gpa : 3.80,
  },

  {name : "Ray",
    id : 103,
    gpa : 4.50,
  },

  {name : "Ra",
    id : 104,
    gpa : 4.50,
  }
]
console.log(student.find(x => x.gpa > 4));