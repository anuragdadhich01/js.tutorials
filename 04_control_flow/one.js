// //if
// const isUserloggedIn = true
// const temperature = 41 

// if (temperature < 50 ){
// console.log("less then 50");
// }
// else{
//     console.log("temperature is greater tha 50");
// }

// console.log('Executed');

// < ,> , <= , == , != , === , !==

// const score = 200 
// if(score > 100){
//     const power = "'fly"
//     console.log(`user power : ${power}`);
// }
// const balance = 2000

// // if(balance > 500) console.log("test");
// // console.log("test2");

// if (balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 
if (isUserloggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}