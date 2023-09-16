//sinigleton

// object literales
// Object.create

const mySym = Symbol("Key1")
const JsUser = {
    name : "Anurag",
    "full name " : "Anurag Dadhich",
    [mySym] : "myKey1",
    age : 19,
    location : "Jaipur",
    email : "anuragdadhich2005@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday, Saturday"]

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name "]);
console.log(JsUser[mySym]); 

JsUser.email = "anuragdadhich2005@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "anuragdadhich2005@gmail.com"
//console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello Js User");}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
