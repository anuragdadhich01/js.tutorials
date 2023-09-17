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
// // console.log(this);    
// // }
// // chai()

const chai = () => {
    let username = "Anurag"
    console.log(this.username);
}
// chai()



     