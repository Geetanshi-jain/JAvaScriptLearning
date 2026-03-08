let sb = document.getElementById('fname1');
console.log(sb);

/*incase of this function it is not run all types field so we pass parameter for calling a particular input field where we cilck or focus
*/
/* 1.onfocus */
function focusfun(fn) {
    fn.style.background = "blue";
}
//for remove the blue color from  the field that occur by focus event
//onblur
function blurfun(elm) {
    elm.style.background = "";
}
//input
function inputfun(elm) {
    var x = elm.value;
    document.getElementById('test').innerHTML = x;
}
//chang event
function changefun(elm) {
    var x = elm.value;
    document.getElementById('test').innerHTML = x;
}

function submitfun() {
    var x = document.getElementById('fname1').Value;
    alert(" hello" + x + "you are successfully login ");
}

/*oninvalid="alert('please fill the correct name')" this work some browswer after html5*/
function closewindow() {
    window.close();
}

function seterror(id, error) {
    //set error here
    element = document.getElementById(id)
    elememt.getElementsByClassName('formerror')[0].innerHTML = error;

}
function validateForm() {
    var returnval = true;
    var name = document.forms['myname']['fname'].value
    if (name.length < 3) {
        seterror("name", "*length of name is too sort")
        returnval = false;
    }
    return returnval;
}
