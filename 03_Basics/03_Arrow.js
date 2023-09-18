const user = {
    username: "Anuarg",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);
        
    }

}
// console.log(this);
// // user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai() 
// // {
// //     let username = "hitesh"
// // // console.log(this);    
// // // }
// // // chai()

// const chai = function() => {
//     let username = "Anurag"
//     // console.log(this.username);
// }
// // chai()

// const chai =()  => { 
//     let username = "Anurag"
//     // console.log(this);
// }


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3 , 4));
     
// const addTwo = (num1 , num2) =>( num1 + num2)
const addTwo = (num1 , num2) =>( {username: "Anurag"})
console.log(addTwo(3 , 4));
