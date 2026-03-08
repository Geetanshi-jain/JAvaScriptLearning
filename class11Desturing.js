let student = {
    rollno: 101,
    name: 'geetanshi jain',
    fee: 2000,
    college: 'Davv'
}

console.log(student)
console.log(student.name)
console.log(student.fee)
student.college ='Holkar'
console.log(student.college)
console.log(student.fee)
//Desturing  array
var names = ["alpha", "beta", "gamma", "delta"]
var firstname = names[0];
var secondname = names[1];
console.log(firstname)
console.log(secondname)
//object desturing
/* ({ x, y } = { x: 10, y: 20 })
console.log(x)
console.log(y)*/
//spread operator
//combine these two objects
const myvehicle = {
    brand: 'ford',
    model: 'mustang',
    color: 'red'
}
const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}
const myUpdatedvehicle = { ...myvehicle, ...updateMyVehicle }
console.log(myUpdatedvehicle)

fun("one", "two", "three", "four", "five", "six");
/*
function fun(...one,...wrong)
this is wrong syntax*/
/* we use the rest of opertor only in last*/

/* using rest opertor we use ordinary operators also*/
function fun1(a, b, c, ...thearg) {
    console.log(thearg.length)
    //here we use length attribute for finding length of a particular variable
}
fun1();
fun1(5);
fun1(2, 6, 7, "geetanshi jain");
function multiply(multiplier, ...theargs) {
    //mutipiler =2 with 3,4,5 are assign theargs
    return theargs.map((element) => multiplier * element)
}
const arr = multiply(2, 14, 13, 21);
console.log(arr);
//sortArgsArray
multiply(2, 3, 4, 5)

//restof operator with arrow function
let add = (a, ...arg) => {
    sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum = sum + arg[i];
    }
}
console.log(`sum of rest element is` + sum)
console.log(`a element is ${sum}`)
add(12, 1, 2, 3, 4)
//Restof operator with normal function
function sum(...theargs) {
    let total = 0;
    for (const arg of theargs) {
        total += arg;
    }
    return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4))


function fun(a, b, ...manymoreargs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manymoreargs", manymoreargs)

}

