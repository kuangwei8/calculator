
// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function (number1, number2){
  return number1 * number2;
};

var division = function (number1, number2){
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

 $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1,number2);
    $("#output2").text(result);
 });

 $("form#multiply").submit(function(event){
   event.preventDefault();
   var number1 = parseInt($("#mul1").val());
   var number2 = parseInt($("#mul2").val());
   var result = multiply(number1, number2);
   $("#output3").text(result);
 });

 $("form#division").submit(function(event){
   event.preventDefault();
   var number1 = parseInt($("#div1").val());
   var number2 = parseInt($("#div2").val());
   var result = division(number1, number2);
   $("#output4").text(result);
 });

 

});

// var bodyMassIndex = function (){
//   var weight = parseFloat(prompt("Enter your weight in lbs:"));
//   var height = parseFloat(prompt("Enter your height in inches:"));
//   var bmi= (703*(weight/(height**2)));
//   result = alert (bmi.toFixed(2));
// };
//
// bodyMassIndex();
// */
// var convert = function(){
//   var celsius = parseFloat(prompt("Enter temp in celsius:"));
//   //var fahrenheit = parseFloat(prompt("Enter temp in fahrenheit:"));
//   var converterFahr = (1.8 * celsius + 32);
//   //var converterCel = (((fahrenheit - 32)*.5556))
//   result = alert("Your temp in fahrenheit " + converterFahr);
// };
// convert();
