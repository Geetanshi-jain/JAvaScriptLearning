/*Rest operator 
with normal function

function sum(...theargs) {
    let total = 0;
    for (const arg of theargs) {
        total += arg;
        
    }
    return total;
}




console.log("sum of element :", sum(1, 2, 3));

console.log("sumof element :", sum(1, 2, 3, 4))

//2. Spreed operator :1.it is also called ellipses operator

//2.it allows us to qus=cikly copy an array or object into another object 
//2.1 : merge two array
let a1 = [1, 2, 3, 4]
console.log(`a1 :${a1}`)
let a2 = ["hyyy", "Hello", 10000];
console.log(`a2:${a2}`)
let mergeArr = [...a1, 50000, ...a2, true]
console.log("new merge array :", mergeArr)
//2.2 merge two obj
let obj = {
    id: 1000,
    gender: 'f'
}
let obj1 = {
    id: 1000,
    name: "geetanshi"
}
console.log(obj);
console.log(obj1);
const comboObj = { ...obj, ...obj1 }
console.log(comboObj)
/*Template literals in java*/
/*
let text = `myself Geetanshi jain
    I am trying to cultivate 
    the habit of coding  `
console.log(text)
let firstName = "Geetanshi"
let lastname = "jain"
let text1 = `Welcome  ${firstName},${lastname}!`;
console.log(text1)*/
//age calculate program
/*
var dob = new Date("05/12/2005");
var diff_ms = Date.now() - dob.getTime();
var agg_df = new Date(diff_ms);
var year = age_dt.getUTCYear();
var age = Math.abs(year - 1970);
console.log("age :", age);*/

// Date -timing
//age calculation program
var dob = new Date("05/12/2005");
var month_diff = Date.now() - dob.getTime()
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970
)
console.log("Age is: ", age, " years");
