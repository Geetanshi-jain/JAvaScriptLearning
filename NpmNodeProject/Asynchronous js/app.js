/*h1 =document.querySelector("h1")

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color =color;
       if( nextColorChange) nextColorChange();
    },delay)
}


changeColor("blue",1000,()=>{
 changeColor("green",2000,()=>{
    changeColor("red",1000)
 })
 changeColor("yellow",1000)
})

//Callbacks nesting => callback hell

function savetoDb(data){
    let internetspeed = Math.floor(Math.random()*10)+1;
if(internetspeed>4){
   success();
}else{
    failure();
}
}


savetoDb(
    "apna college",
    ()=>{
        console.log("success : your data was saved")
        savetoDb(
            "hello world",()=>{
                console.log("success2 : data2 saved")
            },()=>{
                console.log("failure2:weal connection")
            })
        
    },
    ()=>{
        console.log("failure:weak connection")
    }
)



*/
function savetoDb(data){
    return new Promise((resolve,reject) => {
        let internetspeed =(Math.random()*10)+1;
        if(internetspeed >4){
            resolve("success: data was saved")
        }else{
            failure(
                "failure: weak connection ")
        }
    })
}


/*let req = savetoDb("apna college");
req.then(()=>{
  console.log("promise was resolved")
})
.catch(()=>{
    console.log("promise was rejected")
})

*/

savetoDb("apna college").then(()=>
    console.log("resolved "))

.catch( ()=>{
    console.log("rejected")
})\
saveToDBpromise("apna college").then(()=>{
    console.log("promisel resolved")
    return saveToDBpromise("hello world")
})
.then(()=>{
    console.log("promise 2 resolved")
})
.then(()=>{
    console.log("promise3 resolved")
})
.catch(()=>{
    console.log("promise2 resolved")
})


