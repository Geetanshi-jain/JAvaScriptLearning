const prompt = require("prompt-sync")();
/*Question 3. Write a program to check whether a number is negative, positive o*/
/* using  arrow function*/
let p = prompt("enter any no");
console.log("__________________________")
let fun = function (p) {
    if (p > 0)
        console.log("number is positive")
    if (p < 0)
        console.log("number is negative");
    if (p == 0)
        console.log("number is Zero")
}
fun(p)