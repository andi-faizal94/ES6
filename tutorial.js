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
