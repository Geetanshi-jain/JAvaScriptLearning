/* class :is a virtual entity or a scaleton (blueprint) which contains data and method 
Data : variable
bhehaviour :method
Object :realtime entity which occupy memory 2.it is an instance of class 
3.for allocating memory to the class we have to create its objects 
4.object also called instance
OOP concepts are intraduced in ES6 or Ecma script 2015
*/
/*
const prompt = require("prompt-sync")();
class Car {
    constructor(brand) {
        this.brand = brand;
        return this.brand;

    }
}
let mycar = new Car("ford")
console.log(mycar)

/* constructor function

function fun(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyeColor = eye;
}
const f1 = new fun("Geetanshi", "jain", 18, "black")
console.log(f1)

/* Student data using class
class student {
    constructor(stdName, age, sem, college, course, fees) {
        this.stdName = stdName;
        this.age = age;
        this.sem = sem;
        this.college = college;
        this.course = course;
        this.fees = fees;
    }
}

//create a object of class
let s = new student("geetanshi", 18, 4, "Davv", 40000);
console.log("student data is: ")
console.log(`clg name = ${s.college}
        stdname = ${s.stdName}
            age =${s.age}
            sem =${s.sem}
            course =${s.course}`)
*/
/* Employee data
class Employee {
    /* note : we make global variable in class like this
    Accessiblity :inside class
    EmpWorkingPlace = "Indore";
    constructor(EmpId, EmpName, EmpSalary, EmpDesignation, Empage) {
        this.EmpId = EmpId;
        this.EmpName = EmpName
        this.EmpSalary = EmpSalary;
        this.EmpDesignation = EmpDesignation;

        this.Empage = Empage;
    }
    detail() {
        console.log("EmpId = ", this.EmpId);
        /* template literals :
        1.dynamic output
        2.formatted output;
        3.No need to write multiple con.log()
        4.no need to add external \n
        console.log(`EmpName =${this.EmpName},
       EmpId = ${this.EmpId}
        EmpSalary =${this.EmpSalary}
      EmpDesignation=${this.EmpDesignation}
       EmpSalary =${this.EmpSalary}
       Empage =${this.Empage}`)
    }
}
let a = prompt("enter your Emp Id");
let b = prompt("enter your name");
let c = prompt("enter your salary");
let d = prompt("enter your designation");
let e = prompt("enter your  age");
let std = new Employee(a, b, c, d, e);
console.log("your details are")
std.detail();*/
const prompt = require("prompt-sync")();
/* program of calculate percentage using class and object*/
class Student {

    constructor(name, mthMks, scMks, engMks, sanskritmks, hindimks) {
        this.name = name;
        this.mthmks = mthMks;
        this.scMks = scMks;
        this.engMks = engMks;
        this.sanskritmks = sanskritmks;
        this.hindimks = hindimks;
    }
    calculate = () => {
        const averagePercentage = (this.mthmks + this.scMks + this.sanskritmks + this.hindimks + this.engMks) / 500; // Assuming you have 5 subjects
        const result = averagePercentage * 100;
        console.log("result in % =", result);

    };
}
let nm = prompt("enter name");
let n1 = prompt("enter math marks");
let n2 = prompt("enter science marks");
let n3 = prompt("enter soscience marks");
let n4 = prompt("enter hindi mks");
let n5 = prompt("enter sanskrit mks");
s1 = new Student(nm, parseInt(n1), parseInt(n2), parseInt(n3), parseInt(n4), parseInt(n5));//here all the Dt are object in js so need to parse into an integeror float we use parseInt() parseFloat()
s1.calculate();
