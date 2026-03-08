function submitForm(){
    let txt = document.getElementById('txt').value
    alert(`Thankyou for welcoming mr/mrs ${txt}`)
}

let form = document.forms[0];

form.addEventListener('reset', ()=>{

    alert("you reset the form plss put new input again...")
})


window.addEventListener('load', ()=>{

    console.log("Running...............")
})




