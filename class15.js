//single inheritance
class car {
    engine = true;
    wheel = 4;
    milege() {
        console.log("milege of the car is 400");
    }
}
class ferrari extends car {
    ceiling = false;
}

let c = new ferrari();
console.log(`engine :${c.engine}
            wheel :${c.wheel}`)
c.milege();

