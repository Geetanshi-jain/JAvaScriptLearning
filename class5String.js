/* String in js */
let text = "geetanshi jain"
console.log(text) //for print
console.log(text.length) //for finding length
//for iterate string 
var j = 0;
for (j = 0; j < text.length; j++) {
    console.log(text.charAt(j))
}
//iteration secand method
console.log(text.charAt(0))
console.log(text.charAt(1))
console.log(text.charAt(2))
console.log(text.charAt(3))
//  direct
console.log(text[0])
console.log(text[1])
console.log(text[2])
console.log(text[3])
console.log(text.matchAll)
/* notes :
1.String are immutable in js
2.String is a sequance of character which works on indexing and indexing start from 0
3.string are objects 
4.saved in heap memeory
5.we change string content by 2 ways
1. + 2.concate()
6.how to found last index of string  :   stringname.length -1 bc'z indexing start from 0 
7. finding string length use length attribute.
8  we can create string by 2 ways in js
    1. by literals
    let s1= "hyyyyyyyyyy"
    by new keywords
    let s2 =new String("Hyyyyyyyyyyyyyy")
    console.log(s2)
    // in js there is no concept of scp but still difference of here
     new :  takes extra two bytes memory
     literal :not take extra memory























