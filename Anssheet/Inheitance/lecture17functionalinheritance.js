/*function person(firstname, lastname, age,) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}
let p = new person("Ankita", "tiwari", 20);
console.log(p);
console.log(person.firstname)
console.log(person.lastname)
person.prototype.name = function () {
    return (this.firstname + " " + this.lastname)
}
person.prototype.nationality = "english";
console.log(p.firstname);
console.log(p.lastname);
*/

//functional inheritance :
function Animal(data) {
    that = {}
    that.name = data.nm
    return that;
}
function Lion(info) {
    var anim = new Animal(info)
    this.detail = function () {
        console.log(`name of anuimal  is,${anim.name})`);
    }
}
let l = new Lion({ nm: "lion ji" });
console.log(l.name)

//Polymorphism : ability to take more than one forms  in java script only method  overrride is follow there is no concept of method overloading 
/*
Ex. class  Human  has contain a method learning and in this program Geetanshi is class in which the learning method is  overridden 
*/


class Human {
    learning() {
        console.log(" learning method of human class..............");
    }
    detail() {
        console.log("detais function call ")
    }
}
class Geetanshi extends Human {
    learning() {
        console.log(" overrriden method :learing method of Geetanshi class");
    }
}
let hum = new Human()
hum.learning();
let Geet = new Geetanshi()
Geet.learning()

/*  check method overloading in js*/
/* its not consider as a polymorphism in js*/ 
class Employee {
    working() {
        console.log(" employee is working in Goverment e market  department office");
    }
    detail(name, Address, age) {
        console.log("it is 3 args fun ")
    }
    detail(name, Address) {
        console.log(" 2 args fun")
    }
    working() {
        console.log(" employee is transfer from  Goverment e market  department to   office Electronic market department");
    }

}

let e = new Employee()
// its not depend of the calling of function in depend on declaration of function the last function override all the previousdeclare function with same type   2 args fun  is created in last so howm many times we call the function its call only 2 args fun 
e.detail("Anuska", 19) //2 ars fun
e.detail("Anuska", "19 gandhi park Bhopal", 19) //2 args fun






