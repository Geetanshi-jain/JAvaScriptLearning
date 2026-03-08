/* converting number to string */
/* methods 1.String() 2.toString()*/
var a = 110
var b = String(a)
console.log(b + 10) //convert in string + operator is not add this it concatenate 10 with 110
var c = String(100 + 23)
console.log(c) // ans 123
// conversion first add this no then convert this into string

var d = a.toString() //convert a in string
console.log(d)
var e = (123).toString() //123 in to string
console.log(e)
var f = (100 + 23).toString()
  //first add then convert
/* converting boolean to number*/

var g = Number(false)     // returns 0 
console.log(f)
var h = Number(true)      // returns 1
console.log(f)
/*  Boolean to String */
var i = String(false)
console.log(i)
var j = String(true)
console.log(j)


/* Automatic type conversion */
let k = 10 + null
console.log(k)  //null =0 +10 =10
let l = "5" + null // "5null"
console.log(l)
let m = "5" + 3 //53
console.log(m)  /* point is + is overloaded but - is not overloaded */
let n = "5" - 2 //3 
console.log(n)
let o = "5" * "2"
console.log(o) 
