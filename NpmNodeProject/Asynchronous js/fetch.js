console.log(" Fectch js created");
let mybtn = document.getElementById("mybtn")
let content = document.getElementById("fetch")
function getDate() {
    console.log("started getData")
    url = "data.txt";
    fetch(url).then((response) => {
        console.log(":inside first then");
        return response.text();
    }).then((data) => {
        console.log(data);
    })
}
console.log("before running getData")
getDate();
console.log("after get data")