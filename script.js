// function declaration

function sayHello() {
  console.log("hello");
}

sayHello();

// function expression

var sayBye = function() {
  console.log("Bye");
}

sayBye();

// practice with functions

function sing(song) {
  console.log(song);
}

sing("im a real g");
sing("picture me rollin'")

// function mutiply

function multiply(a, b) {
  return a * b;
}

multiply();

// better self powering car

function checkDriverAge(age) { if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
  console.log(age)
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
  console.log(age)
}}

checkDriverAge(44);
