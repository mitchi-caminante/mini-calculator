//constants
let calculator = document.getElementById("calculator");
let answer = document.getElementById("answer");
//input numbers are not value yet, & get turned into values later in the event listener -- you have to add the value in the event listener otherwise it will save the value when the page first loads, NOT when the event listener happens
let input1 = document.getElementById("firstNum");
let input2 = document.getElementById("secondNum");
//const for getting the value of the dropdown menu
let operator = document.getElementById("operator");

//add numbers from input
calculator.addEventListener("submit", (e) => {
	e.preventDefault();
//take the input, turn them in values, parse them, calculate them & put answer in answer field in form
	const firstNumber = parseInt(input1.value);
	const secondNumber = parseInt(input2.value);
	if  (operator.value ==="add") {
		answer.value= firstNumber + secondNumber;
	}else if (operator.value ==="subtract") {
		answer.value= firstNumber - secondNumber;
	}else if (operator.value ==="multiply") {
		answer.value= firstNumber * secondNumber;
	}else if (operator.value ==="divide") {
		answer.value= firstNumber / secondNumber;
	}
})


