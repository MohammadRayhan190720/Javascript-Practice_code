const data = require('./frends-data.json');
// console.log(data);
// data access
// console.log(data.friends[1]);
// console.log(data.friends[1].Age);
// console.log(data.friends[0].name);

// data modify

data.friends[1].name = "Jonh";
// console.log(data.friends[1]);
data.friends[0].Age = 24;
// console.log(data.friends[0]);

// delete data

delete data.friends[0].name;
// console.log(data.friends[0]);


const data1 = require('./students-data.json');
// console.log(data1);

// console.log(data1.students[0].friends[1].name);

// console.log(data1.students[1].languages[1]);
data1.students[1].friends[0].name = "tamanna";
// console.log(data1.students[1]);

// looping 
// for (x in data1){
//   console.log(x);
//   console.log(data1[x]);
// }

// how to convert json Data

const data2 ={
  name: "tamanna",
  age : 18,
  gpa : 3.87
}
'{"name":"John", "age":30, "city":"New York"}';

// console.log(JSON.stringify(data2));



// console.log(JSON.parse('{"name":"tamanna","age":18,"gpa": 3.87}'));
// object
console.log(JSON.parse('{"name":"John", "age":30, "city":"New York"}'
));

// array
const text = '["Ford", "BMW", "Audi", "Fiat"]';
console.log(JSON.parse(text));
  
