const prompt = require("prompt-sync")();
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
let i = 0;
let e = new Employee(name1, Esal, Emobno);
e.Detail().forEach(e => console.log(e[i]))
console.log(" your detail", e.Detail())

/* 
teacher Data :using constructor and loop and user input*/
function Teacher(Tnm, Tsalary, Tmobno) {
    this.Tnm = Tnm;
    this.Tsalary = Tsalary;
    this.Tmobno = Tmobno;
    this.Detail = function Emp() {
        return [Ename, Esalary, Emobno]
    }
}
let Tname1 = prompt("enter name")
let TEsal = prompt("enter Employee salary")
let TEmobno = prompt("enter mobile no");
let e1 = new Employee(name1, Esal, Emobno);
e.Detail().forEach(e => console.log(e1[i]))
console.log(" your detail", e.Detail())

/*  Animal Data :using constructor and loop and user input*/
function Animal(Tnm, Tsalary, Tmobno) {
    this.Anmnm = Tnm;
    this.AType = mammals;

    this.Detail = function Emp() {
        return [Ename, Atype]
    }
}
let Aname1 = prompt("enter name")
let AEsal = prompt("enter Animal type")
let A1 = new Employee(name1, Esal, Emobno);
e.Detail().forEach(e => console.log(A1[i]))
console.log(" your detail", e.Detail())
/* Car Data :using constructor and loop and user input*/
function Car(Type, Price, Wheel) {
    this.Type = Type;
    this.Price = Price;
    this.Detail = function Emp() {
        return [Type, Price]
    }
}
let cnm = prompt("enter car name")
let cp = prompt("enter car price")
let c1 = new Car(cnm, cp);
c1.Detail().forEach(e => console.log(c1[i]))
console.log(" your detail", c1.Detail())
/* College Data :using constructor and loop and user input*/
function College(cname, Grade,) {
    this.cname = cname;
    this.Grade = Grade;
    this.Detail = function clg() {
        return [cname, Grade]
    }
}
let cnm11 = prompt("enter college name")
let cg1 = prompt("enter college Grade")
let cl1 = new Collge(cnm11, cg1);
cl.Detail().forEach(e => console.log(cl[i]))
console.log(" your detail", cl.Detail())

/* Bike Data :using constructor and loop and user input*/
function Bike(Bname, BPrice) {
    this.Bname = Bname;
    this.Bname = BPrice;
    this.Detail = function clg() {
        return [cname, Grade]
    }
}
let B1 = prompt("enter college name")
let BP = prompt("enter college Grade")
let cl = new Collge(B1, Bp);
cl.Detail().forEach(e => console.log(cl[i]))
console.log(" your detail", cl.Detail())
/* human Data : with  function*/

function Human(Btype, BPrice) {
    this.Human = HumanNAme;
    this.Bname = BPrice;
    this.Detail = function clg() {
        return [cname, Grade]
    }
}
let hname = prompt("enter college name")
let = prompt("enter college Grade")
let = new Collge(B1, Bp);
cl.Detail().forEach(e => console.log(cl[i]))
console.log(" your detail", cl.Detail())