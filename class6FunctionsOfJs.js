/* javascript works on unicode  */
/* string is an object of js */
let str = "           this is javascript."
let code = str.charCodeAt(0)/* charCodeAt(int idx) returns the Ascii code corresponding the paricular character */
console.log(code) //65
console.log(str.endsWith(".")) //return boolean incase of true otherwise false
console.log(str.startsWith("this"))
console.log(str.indexOf("i")) //it returns string index of first occurance 
console.log(str.lastIndexOf("i")) //it returns last index of occurance of character
console.log(str.toLocaleLowerCase()) //convert lower case
console.log(str.toLocaleUpperCase()) //convert upper case

console.log(str.trim()) // it removes all bytespace  from both side in js
console.log(str.trimEnd())  // it removes all bytespace from Ends of string
console.log(str.trimStart()) //it removes all bytespace from start of string

console.log(str.replace('i', 'j'))  //replace(where changes, what changes )
console.log(str.replaceAll('i', 'j'))// change all i to j
// Difference : replace only replace first character and replace All replace all the characters 
console.log(str.substring(5, 15)) //it returns a string as a substring 
console.log(str.substr(15)) //it returns all the character after the 5 indexing
/* difference between substring and substr is: in case of substring it is mandatroy  to give two arguments  //in case of substr : not manadatroy the last index */
let strArr = str.split('i') //it convert string into an array on the basis of delemeter  
console.log(strArr)
let obj = str.valueOf(new Date())
console.log(obj) //valueof method  are convert the value of object
/*convert PT into object */

let text = "5"
let padded = text.padEnd(4, "0"); // 5000  it add end of string 
console.log(padded)
let padded1 = text.padStart(4, "0"); //0005 it add beging 
console.log(padded1)
    








