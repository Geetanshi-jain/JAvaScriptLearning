/* operators in javascript*/
/* Arithmetic Operators*/
var a = 10
var b = 10
console.log(" a+b  =" + a + b)
console.log(" a-b  =" + a - b)
console.log(" a*b  =" + a * b)
console.log(" a/b  =" + a / b)
console.log(" a%b  =" + a % b)
/* Exponentiation  */
console.log(" a**b  =" + a ** b)
/* unary*/
console.log(" a++  =" + a++)
console.log(" a--  =" + a--)


/*Assignment Operators*/
var x = 12;
x += 5; /*compound assignment*/
console.log(x)

let y = 12;
y -= 5; /*compound assignment*/
console.log(y)

let z = 12;
z *= 5; /*compound assignment*/
console.log(z)

let p = 12;
p /= 5; /*compound assignment*/
console.log(x)

let q = 10;
q %= 5; /*compound assignment*/
console.log(x)
/*JavaScript Comparison Operators*/

let r = 2
let s = "2"
if (r == s) //it not check  datatype
    console.log("equal o")
else
    console.log("not equal")

var t = 2
var u = "2"
if (t != u) //it check  datatype also
    console.log("equal")
else
    console.log("not equal")

var v = 2
var w = "2"
if (r !== s) //it check  datatype also 
    console.log("equal of 2 ")
else
    console.log("not equal of 2 ")

var t = 10
var u = "2"
if (t > u) //it check  datatype also
    console.log("greater")
else
    console.log("not equal")



var v = 2
var w = "2"
if (v < w) //it check  datatype also
    console.log("smaller ")
else
    console.log(" greater")





var x = 2
var Y = 3
if (x <= Y) //it check  datatype also
    console.log("less than")
else
    console.log(" grater than")

/* ?	ternary operator*/

var Z = (x < y) ? console.log("smaller") : console.log("greater")

/* logical  : used to find relation between multiple relational condition*/
var l1 = (12 < 20) && (30 > 10)
console.log(l1)
var l2 = (12 < 20) || (30 > 10)
console.log(l2)
var l3 = !(12 < 20)
console.log(l3)
/* type of operator */
var type = 10;
console.log(typeof (type)) //it returns type of a variable































