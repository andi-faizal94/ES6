// Use var
// var variables can be re-declared and updated

function greetPerson(name) {
  var greet;
  if (name === 'Chandler') {
    greet = 'Hello Chandler';
  } else {
    greet = 'Hi There';
  }
  console.log(greet);
}

greetPerson('k');

// Use Let
// Let is block scope
// let can be updated but not re-declared.

// function greetPerson(name) {
//   let greet;
//   if (name === 'Chandler') {
//     greet = 'Hello Chandler';
//   } else {
//     greet = 'Hi There';
//   }

//   console.log(greet);
// }

// greetPerson('k');

var a = 1;
var b = 2;
if (a === 1) {
  var a = 10;
  let b = 20;
  console.log(a);
  //   expected: 10
  //   because use var and can redeclare
  console.log(b);
  //   expected :20
  //   because use let ,in  block scope
}

console.log(a);
// expected: 10
// because use var and can redeclare
console.log(b);
// expected : 2
// because use var and global scope
