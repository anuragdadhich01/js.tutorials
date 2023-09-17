

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


// // console.log(loginUserMessage("Anuarg"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,4000,500));

const user = {
    username : "Anurag",
    price : 199,
    
}

function handleObject(anyobject){
    console.log(`username is $ { anyobject.username} and price is $ {anyobject.price}` );
}
// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})
const myNewArray = [200,400,500,100]

function returnSecondValue(getArray){
    return
}