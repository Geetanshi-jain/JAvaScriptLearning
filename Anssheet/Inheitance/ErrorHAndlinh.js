/* Error is a runtime anamolie which breaks and terminated the normal flow of our program*/
/* in js 3 type of error occur 
1.syntax error
2.reference rerror
2.logical error
3.aval error 
4.URI error 
5.range error
 we use 3 keyword for handling error in js 1.try 2.catch 3.finally
 note: syntax error can not be handle
  only runtime and logical error handle
*/
console.log("______________________________________");
let a = 10;
let b = 20;
try {
    console.log("befor error ");
    console.log("operation " + 0 / 0)//new error()
    console.log("operation " + 9 / 0)//new error()
    console.log("After error")
} catch (err) {
    console.log("name of err: ", err.name)
    console.log("cause of message:", err.message)
    console.log("Catch block..........")
    //let err =new Error()
}
finally {
    console.log("finally is running")
}
console.log("outside catch block")
console.log("after error")

//0/0 gives Nan
// 5/0 gives infinity
/*
Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not a  negative number.
*/
console.log("______________________________________");
function validateNum(number) {
    if (number < 0) {
        throw new Error('Invalid number,please ')
    }
    console.log("number is valid", number)
}
//example usage:
try {
    validateNum(19)
    validateNum(2.0)
    validateNum(-2)
} catch (error) {
    console.log("error :", error.messege);
}
/* Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.*/
console.log("______________________________________");
function ArrayCheck(Array) {
    if (Array.length == 0) {
        throw new Error('empty error')
    }
    console.log("array size is,Array.length")
}
try {
    let array = new array("geet", 34, true);
    ArrayCheck(array)
}
catch (error) {
    console.log("error :", error.message)
}
/* Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.*/
console.log("______________________________________");
function StringEmpty(stremp) {
    if (stremp.length === 0) {
        throw new Error('empty string')
    }
    console.log("string size is", stremp.length)
}
try {
    let str = "geet";
    StringEmpty(str)
    let str2 = '';
    StringEmpty(str2)

}
catch (error) {
    console.log("error :", error.message)
}
/*. Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.*/
console.log("________________________________________");
function variable() {
    try {
        console.log(underfinedVariable);
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('ReferenceError :', error.message);
        } else {
            console.log('refernceError', error.message);
        }
    }
}
variable();

//eval():
/*
it create an instance for an error that Occured in the eval(),which is a global function used for evaluating that js string code*/
try {
    throw new EvalError("hello")
} catch (e) {
    console.log(e instanceof EvalError);
    console.log(e.message);

}