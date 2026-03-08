let arr = [2, "34", 4.4, "hello", null, true, undefined]
//for printing the arr elm
console.log(arr)
arr.push("hello") //push("elm"): add elm at last
arr.push("Geetanshi")
console.log(arr)
arr.pop() //pop used for pop the elm from last
console.log(arr)
arr.shift() //it shift element from start : shift() as a queue =pop() as a stack
//difference  : No 
arr.shift()
console.log(arr) //it shift element from begning like circular and input-restricted queue

arr.unshift("hello")
console.log("__________________________")

console.log(arr)
//length for finding array length
console.log(arr.length) //by length attribute
console.log(arr.at(0)) //it return  the elem at particular index
let na = new Array(1, 21, 31, 90, 4)
//na.fill(8) //it fills the particular elm in all places of array
console.log(na)
console.log(arr.includes("geetanshi")) //it returns boolean value when a pariticular elemnet are  exists in an array
console.log(arr.join("-")) //it converts array into a string on the basis of delimeter
console.log(arr.reverse())
//used to reverse the string
let na1 = [101, 21, 94,]
Array.sort(na1)
console.log("sorted array ", na1) // it sort element but condition: all are  same DT * /
let na2 = [1, 21, 3, 9433, 4]



//Merging array
let arr1 = [12, 23, 21, 1]
let arr2 = [9, 8, 7, 6]
//merge array
let myconcat = arr1.concat(arr2);
console.log(myconcat)
//add another value
const Gt = ["geet", "manu", "shanu"];
const Gt1 = arr1.concat("Peter");
console.log(Gt1)
//Array copy with in
let fruit = ["mango", "banana", "grapes"]
console.log(fruit.copyWithin(2, 0))
//copy index elemnt fron 0 to 2
/*Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.*/
fruit.slice("1")
/*The slice() method creates a new array.

The slice() method does not remove any elements from the source array.
*/





