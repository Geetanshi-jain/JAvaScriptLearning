/* with the help of static keyword we can access static method and variable in a class*/
/* static related to the class we can access static method and variable with its class name
class StaticTest {
    static clgname = "IIPS" //static variable
    course = "MCA"
    name = "shanu"
    age = 19
    details() {
        console.log(`clgname =${this.clgname}
                    course =${this.course}
                    name =${this.name}
                    age =${this.age}`
        );
    }
}

let st = new StaticTest()
st.details();
console.log("clgname :", StaticTest.clgname)

//how can be create private member in class
/* using syntax = #Variablename only
    scope :inside class*/
    /*
class PrivateMember {
    static #clgname = "IIPS"
    course = "MCA"
    name = "shanu"
    age = 19
    details() {
        console.log(`clgname =${this.clgname}
                    course =${this.course}
                    name =${this.name}
                    age =${this.age}`
        )
    }
}

let st1 = new StaticTest()
st1.details();
console.log(StaticTest.clgname) //we not accesss here it gives undefined

/*how to achieve Encapsulation
creating all the variables private and method public */
/*
class Encapsulation {
    static #clgname = "IIPS"
    #course = "MCA"
    #name = "shanu"
    #age = 19
    static details() {
        console.log(`clgname =${this.clgname}
                    course =${this.course}
                    name =${this.name}
                    age =${this.age}`
        )
    }
}
let s = new StaticTest()
Encapsulation.details();
/* if we create all variables private and methods public then how can access
outside the class*/
/* by using setter and getter method
/*if we not create  constructor then js interpreter internally call no argument constructor
/*how to use setter getter*/
/*
class SetterGetter {
    static #_clgname = "IIPS"
    #course = "MCA"
    #name = "shanu"
    #age; //default variable
    set_clgname(nm) {
        this.name = nm;
    }
    details() {
        console.log(`clgname =${this._clgname}
                    course =${this.course}
                    name =${this.name}
                    age =${this.age}`
        )
    }
}
let s1 = new StaticTest()
console.log(SetterGetter._clgname);
class StaticTest8 {
    static clgname = "IIPS"; // static variable
    course = "MCA"; // instance variable
    name = "shanu"; // instance variable
    age = 19; // instance variable

    details() {
        console.log(`clgname = ${this.clgname}
                    course = ${this.course}
                    name = ${this.name}
                    age = ${this.age}`);
    }
}

let st3 = new StaticTest(); // create an instance of the StaticTest class
st3.details(); // call the details method on the instance

console.log("clgname :", StaticTest8.clgname); // access the static variable directly from the class
*/

class Animal{

    constructor(tail,trunk,legs){
        this.trunk =trunk;
    this.tail =tail;
    this.legs =legs;
    this.eat = function(){
        console.log('animal is eating');
    }
    }
}