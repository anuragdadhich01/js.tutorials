//Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString);
// console.log(typeof myDate);

// let mycreatedDate = new Date(2023, 8, 16, 5, 3);
// console.log(mycreatedDate.toDateString());
// let mycreatedDate = new Date("2023-01-14");
//  console.log(mycreatedDate.toLocaleString());
 
 let mycreatedDate = new Date("08-16-2023");
//  console.log(mycreatedDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default', {
    weekday: "long",
    hour12 : ""
})