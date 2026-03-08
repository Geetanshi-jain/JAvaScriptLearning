const readline = require('readline')
/* function: function is  a block of code that perform a specific task.
  execution: function is execute when it is call
  in JS function are created with the helpof function keyword
  in JS we can return multiple values from a single function
  in Js we can write one function into another function(Nested function/behaviour /dynamic work) */
/* Need of function : code reusability
/* 1.Regular function
   2.Arrow function 
   3.Annonymous function
   4.immediately call function
   5.Callback function
   6.higher order function
   /*regular function :a function which is declare like:*/
function addTwoNumber(a, b) {
    console.log(a + b)
}
addTwoNumber(13, 98)
addTwoNumber(100, 200)
/* we can call a  function multiple time in js
/* return :in function return keyword is used to return particular result from function body to calling environment */
function addTwoNumber(a, b) {
    return a + b //return statement
}
let c = addTwoNumber(13, 98) //calling environment
console.log(c)
/* in js we return multiple value at a time but our function isreturn  only last  value */
function addTwoNumber(a, b) {
    return a, b, 100 //return statement return 100
}
let c1 = addTwoNumber(13, 98) //calling environment
console.log(c1) //print 100
/* a function with No argument */
function addTwoNumber(a, b) {
    return a + b //a=undefined b=undefined so a+b =Nan
}
let d = addTwoNumber()
console.log(d)  //we not pass anything 
/* return array*/
/* if we want to return multiple argument then we use concept of array */
function ReturnArray(A, b, c) {
    return [A, b, 10000, 32, c]
}
let A1 = ReturnArray(10, 2, 3)
console.log(A1)
console.log(ReturnArray(100, 89))
//Arrow function : it is intraduced in ES6
let addArrow = (a, b) => console.log(a + b)
console.log(addArrow(20, 1))
/*Immediately invoked function Expression : which are not explicite called but it calls at the time of function creation*/
/*  (function (a, b) {
      console.log(a + b)
  })(10, 20);
*/
/* Annonymous or function expression : are those function which do not have any name*/
let Add = function (a, b) {
    console.log(a + b)
}
Add(10, 20)

//Callback function : are those which takes function an 
function Addition(a, b) {
    return a + b;
}
function show(callback) {
    console.log("callback  function call", callback)
}
show(Addition(10, 1))
/*Task 1: Regular function*/
function Addition(a, b) {
    console.log("addition = ", a + b)
}
Addition(12, 2)
function Substraction(a, b) {
    console.log("substraction : ", a - b);
}
Substraction(12, 2)
function Multiplication(a, b) {
    console.log("Multiplication : ", a - b);
}
Multiplication(12, 2)
function Division(a, b) {
    console.log("Division : ", a * b);
}
Division(12, 2)
function Modulo(a, b) {
    console.log("modulo : ", a % b);
}
/* Arrow function*/
let ArrowAddition = (a, b) => console.log(a + b)
ArrowAddition(20, 1)

let ArrowSubstraction = (a, b) => console.log(a - b)
ArrowSubstraction(10, 2)

let ArrowMultiplication = (a, b) => console.log(a * b)
ArrowMultiplication(10, 2)

let ArrowDivision = (a, b) => console.log(a / b)
ArrowDivision(10, 2)

let ArrowModulus = (a, b) => console.log(a % b)
ArrowModulus(21, 5)
/* Anonymous or function expression*/
let Add1 = function (a, b) {
    console.log(a + b)
}
Add1(10, 20)
let Sub = function (a, b) {
    console.log(a - b)
}
Sub(10, 2)
let Mul = function (a, b) {
    console.log(a * b)
}
Mul(10, 2)

let Div = function (a, b) {
    console.log(a / b)
}
Div(10, 2)

const prompt = require("prompt-sync")();
let c11;
c = prompt("enter ")
//prompt always return String value
var p, q;
p = prompt("enter a number a")
q = prompt("enetr a num b")
if (p < q) {
    console.log("p is smallest no")
} else {
    console.log(" p is greatest no")
}

