

function sayMyName(){
    console.log("H");
console.log("I");
console.log("J");
console.log("K");
console.log("L");
console.log("M");
console.log("N");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
    // let result = number1 + number2
    // return result
    // console.log("Anurag");
}

const result = addTwoNumbers(3,10)
// console.log("Result:" , result  );

function loginUserMessage(username){
    if(
        username === undefined
    ){
    console.log("Please enter a username");
    return
}
    return `${username} just logged in =`
}

// console.log(loginUserMessage("Anuarg"));
console.log(loginUserMessage());
