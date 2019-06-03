/*var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);
*/

/*var subtract = function (){
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var sub = (number1 - number2)
  result=alert(sub);
};

subtract();
*/
/*
var multiply = function (){
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var multiple = (number1 * number2)
  result=alert(multiple);
};
multiply();
*/

/*var division = function (){
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var divide = (number1 / number2)
  result=alert(divide);
};

division();
*/

/*
var bodyMassIndex = function (){
  var weight = parseFloat(prompt("Enter your weight in lbs:"));
  var height = parseFloat(prompt("Enter your height in inches:"));
  var bmi= (703*(weight/(height**2)));
  result = alert (bmi.toFixed(2));
};

bodyMassIndex();
*/
var convert = function(){
  var celsius = parseFloat(prompt("Enter temp in celsius:"));
  //var fahrenheit = parseFloat(prompt("Enter temp in fahrenheit:"));
  var converterFahr = (1.8 * celsius + 32);
  //var converterCel = (((fahrenheit - 32)*.5556))
  result = alert("Your temp in fahrenheit " + converterFahr);
};
convert();
