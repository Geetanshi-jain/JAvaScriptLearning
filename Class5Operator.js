/* miscellaneous operators in js
1. typeof operator : define the type of jaavscript */

var c = "Geetanshi jain"
console.log(typeof c)
var d = 10
console.log(typeof d)
e = false
console.log(typeof e) //boolean
f = 10.4
console.log(typeof f) //string
g = 'g';
console.log(typeof g)
/*all the int  float convert into number */
/*2. delete operator : it delete a variable means the Js mechanism deload  the varable from memory */
/*console.log(delete a);
console.log(a) //we get NAn

console.log(delete d) //if we delete and then print this variable value it gives error

console.log(delete e)

console.log(delete f)

console.log(delete g) */

/* instance of operator */

/* instanceof operator returns true or false value */
/*constructor funtion*/

function C() { }
const o = new C();
console.log(o instanceof C);//true

function D() { }
const i = new D()
console.log(i instanceof C);
/*in ES6 
class C {
    constructor() { }
}
const o = new C();
console.log(o instanceof C); // true

/* i is not instance of c so return false*/
/* String in js */
let text = "geetanshi jain"
console.log(text) //for print
console.log(text.length) //for finding length
//for iterate string 
var j = 0;
for (j = 0; j < text.length; j++) {
    console.log(text.charAt(j))
}
//iteration secand method
console.log(text.charAt(0))
console.log(text.charAt(1))
console.log(text.charAt(2))
console.log(text.charAt(3))
//  direct
console.log(text[0])
console.log(text[1])
console.log(text[2])
console.log(text[3])





















