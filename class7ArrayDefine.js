let arr = [1, 21, 30, 52, 3, 2]
//for of loop/
/*
    for(variablename of arrayName){
        console.log(variable name)
    }
    process: interpreter willbring and keep all array elements in v
    */
for (A of arr) {
    console.log(A)
}
//it is used for simple iteration
//for-each function
//this is called functional programing
arr.forEach(A => {
    if (A < 5)
        console.log(A)
}
)
//map function
//uesd for mapping array elm 
let NA = arr.map(a => a * 2)
console.log(arr)
console.log(NA)

//filter function
//filter used for filtering output 
//on the basis of some condition
let even = arr.filter(g => g % 2 == 0)
console.log(even)
let name = arr.filter(g => g % 2 == 0)
console.log(even)
let strname = ['Geetanshi', 'somya', 'sakshi', 'shanu'];
let newname = strname.filter(m => m.length == 5)
console.log(newname)

//task 1: filter the elm condition / ,*,% with map
// first: +
let NA1 = arr.map(a => a + 2)
console.log(arr)
console.log(NA1)
//secand -
let NA2 = arr.map(a => a - 2)
console.log(arr)
console.log(NA2)
//third: 3
let NA3 = arr.map(a => a * 2)
console.log(arr)
console.log(NA3)
//division
let NA4 = arr.map(a => a / 2)
console.log(arr)
console.log(NA4)
//modulo
let NA5 = arr.map(a => a % 2)
console.log(arr)
console.log(NA5)
//Task 2
//array
//qus.1 : search an elm in array
let b = arr.includes("geet")
console.log(b)

//searching an string whose starts with g and ends with i
let strname2 = ["Geetanshi", 'somya', 'sakshi', 'shanu'];
let newname3 = strname2.filter(m => m.startsWith('G') && m.endsWith('i'));
console.log(newname3)

// Js 2D array
let twoDiamensionalArr = [[1, 2, 3, 3, 4, 5], [2, 43, 5, 4.5, 5.7, 6], [32, 1, 22, 43, 6, 5]]
console.log(twoDiamensionalArr)
//Access only one elm in 2D array

console.log(twoDiamensionalArr[0][1])
//iterate by for of loop
for (elm of twoDiamensionalArr) {
    console.log(elm)
}
//Acess first and last elm of 2D array
console.log(twoDiamensionalArr[0][0])
console.log(twoDiamensionalArr[twoDiamensionalArr.length - 1][(twoDiamensionalArr[twoDiamensionalArr.length - 1]).length - 1])

let num = [[1, 2, 3], [3, 4, 5], [5, 6, 6], [6, 7, 7], [10, 8, 7]]
var sum = 0
num.forEach(row => {
    row.forEach((element) => { sum += element; });
});
console.log(sum)

//how to create a 2D array using a nested for loop
let NL = [];
let row = 4;
let columns = 3;
for (let i = 0; i < row; i++) {
    NL[i] = [];
    for (let j = 0; j < columns; j++) {
        NL[i][j] = j;
    }

}
console.table(NL)

console.table(arr)
let ar = [];
let num1 = 0;
//using 2D array
for (let i = 0; i < 4; i++) {
    ar[i] = []
    for (let j = 0; j < 4; j++) {
        ar[i][j] = num1++;

    }
}
console.table(ar)








