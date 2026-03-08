/* we create  a variable in 4 types in javascript */
/* block scope*/
{
    a = 10;
}
console.log(a);

/* local scope*/
for (i = 0; i < 5; i++) {
    console.log(i);
}
/* console.log(i);  this gives error*/

/* global scope*/
a = 10;
{
    console.log(a);
}
console.log(a);
/* function scope variable*/

{
    a = 10;
    let b = 20;
    var c = 40;
    const d = 40;
  
    console.log("Inside block");
    console.log("without  keyword :" + a);
    console.log("with let keyword :" + b);
    console.log("with var keyword : " + c);
    console.log("with const keyword :" + d);
}
console.log("outside block");
console.log("without  keyword :" + a);

console.log("with var keyword : " + c);


var a1=10;
var a2='20';
a1!==a2?console.log("true"):console.log("false"); 
console.log(~90);