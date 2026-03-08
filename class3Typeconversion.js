
/* automatic conversion or implicite conversion*/
let a = 123
console.log(a)
a = "hyyyyyyyyyyyyy"
console.log(a)
/* a is  firstly typed in integer 
    then it automatically convert in string */


/* explicite conversion* /
/*Converting Str
ings to Numbers
*/
/* 1. by Number() function*/
let b = "11"
console.log(b + 1)
var num = Number(b)
console.log(num)


let e1 = "abc"
console.log(e1 + 1) /* + operator is overloaded for 2 task 1. concatenation in case of string 
2. addition for numeric value*/
let e2 = Number(e1)
console.log(e1)
/* bY parseInt() function :we can convert   only  int value  with help of this */

let n = parseInt("123455")
console.log(n)
console.log(n + 9)

/* bY parseFloat() function : we can convert  both float and int value  with help of this*/
let n1 = parseFloat("12.33")
console.log(n1)
console.log(n1 + 2)

/*converting  num or string in boolean  */
let flag = Boolean("") //false
console.log(flag)
let flag1 = Boolean(3) //true
console.log(flag1)
let flag2 = Boolean(-1) //true
console.log(flag2)
let flag3 = Boolean("hy") //true
console.log(flag3)


let flag4 = String("") //false
console.log(flag)
let flag5 = String(3) //true
console.log(flag5)
console.log(flag5 + 6)// in case it converts in string
let flag6 = String(-1) //-1
console.log(flag6)
let flag7 = Number("hy") // Nan : not an number
console.log(flag7)














