const prompt = require("prompt-sync")();
/* Higher order function - are those function which takes a argument as a function
and return function as a result and enablesthe nesting of function */

/* higher order function without return */
function multipleGreet(func,count){
    for(let i=1; i<=count; i++){
        func()
    }
}
let greet= function(){
    console.log("hello")
}

multipleGreet(greet,5);

/*with return */

function outer(a) {
    return function inner(b) {
        return function innerMost(c) {
            return a + b + c;
        }
    }
}
/*internally it convert like this */
/*let Outer1 = outer(1)
let inner1 = Outer1(10)
let innermost1 = inner1(10)
console.log(Outer1)
console.log(inner1)
console.log(innermost1)*/
let res1 = outer(1)(2)(3);//curryibng in java script
//transform a function with multiple argument into a nested series of function each taking a single argument called curring in js*/

console.log(res1)

let num = [1, 2, 5, 4, 3, 21, 1]
num.forEach(function clb(elm) {
    console.log(elm)
})

function showResult(cllback) {
    return num.forEach(cllback)
    /* return num.forEach(function processResult(r)){
        conole.log(r)
    }*/
}

function processResult(r) {
    console.log(r)
}
showResult(processResult)
//constructor function :are those fun which is used to create object in jsit contains variable and function as member 
function Person(name, age, sem) {
    this.name = name;
    this.age = age;
    this.sem = sem; //contain variable
    return [name, age, sem]
}
let p = new Person("Geetanshi jain", 18, 4)
console.log(p);

//constructor function conatin function
// task 1: student data
function student(name, age, clg) {
    this.name = name;
    this.age = age;
    this.clg = clg;
    this.info = function fun() {
        return [name, age, clg]
    }
}
let s1 = new student("Shanu", 18, "Holkar");
s1.info().forEach(n => console.log(n))
console.log(s1.info())
/* constructor function is not use after Es6 */
/* instead of this we use class 
Employee Data :using constructor and loop and user input*/
function Employee(Ename, Esalary, Emobno) {
    this.Ename = Ename;
    this.Esalary = Esalary;
    this.Emobno = Emobno;
    this.Detail = function Emp() {
        return [Ename, Esalary, Emobno]
    }
}
let name1 = prompt("enter name")
let Esal = prompt("enter Employee salary")
let Emobno = prompt("enter mobile no")
let e = new Employee(name1, Esal, Emobno);
e.Detail().forEach(e => console.log(e))
console.log(e.Detail())



