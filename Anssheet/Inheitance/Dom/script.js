/*console.log("hiiiiiiiii!");
alert("hiiii How are you geetanshi");
console.log(document.body);
console.log(document.getElementById("heading"));
let btn = console.log(document.getElementById("myId"));
/*if any class or id not exists then it returns null*/
/*let headings = console.log(document.getElementsByClassName("cls"));
//it returns html collection it's similar an array ansd we can access this by using indexes
console.dir(headings)
console.log(headings);
//document.querySelector
//syntax: document.querySelector("myId/myClass/tag");
//return first elem
let elm = document.querySelector(".heading");
console.log(elm);
//if we want all elms
let elmAll = document.querySelectorAll(".cls");
console.log(elmAll);
//first child
console.dir(document.body.firstChild);
//document.querySelector("div").children
let Tag = document.getElementsByTagName(".cls");
console.log(Tag);
//let inText = div.innerText;
//console.log(div.innerText);
//div.innerHtml;
/*let html = document.getElementById("heading").innerHTML;
document.getElementById("heading").innerHTML = html;
console.log(html);
document.getElementById("heading").innerTEXT
*/
alert("hello")
let heading = document.getElementById('id')

let elms = document.querySelector("p")
console.dir(elms);
let allel = document.querySelectorAll(".cls")
console.dir(allel)
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText += "abc";//concatinate
let div = document.querySelector("div");
console.log(div);
div.getAttribute("id")
let id = div.getAttribute("id")
console.log(id);
//innerText
div.style.backgroundColor = 'green';
let Btn = document.createElement("button");
//Add new Elememnt
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);
let p = document.querySelector("p");
p.after(newBtn);
//Add h1 elemet
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi</i>";
//add at prepand
document.querySelector("body").prepend(newHeading);
let para = document.querySelector("p")
para.remove();
//create a new btn elm .give it text "click me ",bgc of red & text color of white
//insert the button as the first elm inside the body tag
let newBttn = document.createElement("button");
newBttn.innerText = "click me";
newBttn.style.color = "white"
newBttn.style.backgroundColor = "red"
/* create a <p> tag in html .give it a class & someStyling 
/* now create a new class in css and try to append this class to the <p> elements 
did you notice ,how You overwrite the class name you add anew one
solve by using classList










