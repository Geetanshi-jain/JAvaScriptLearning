let cd = new Date()//we create Date object
console.log(cd) //print current date
let myd = new Date(2000, 0, 15, 23, 15, 23) //set custom date
console.log(myd) //print custom date
console.log("current System time :", myd.getTime())//return time from myd
console.log("current system year :", myd.getFullYear())//return Fullyear
console.log("current month :", myd.getMonth())//return month
console.log("getDay() return week day :", myd.getDay()) //it returns week day
console.log("getDate() return ", myd.getDate())//month day
myd.setUTCDate(25)  //it set time on the basis of Universal time coordinated 
myd.setFullYear(3000) //it set time 
console.log("custom Date after some modification :", myd)
let newDate = new Date("2022-03-25 23:23:10")
console.log(newDate)
let newDate1 = new Date("october 13,2014 11:13:00")
console.log(newDate1)
//it returns value in millisecand
console.log(`different btntwo date": ${myd.getTime() - cd.getTime()}`)



