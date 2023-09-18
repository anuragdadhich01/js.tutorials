//  
//falasy values

// false, 0, -0, BigInt on, "", null, undefined, NaN

//  //truthly values 
//  //"0", 'false', "",[],{},function(){} 

//  if (userEmail.length == 0){
//     console.log("Array is empty");
//  }

// const emptyobj = {}
// if (Objesct.Keys(emptyobj).length === 0){
// console.log("Object is empty");
// }

// Nullish Coalescing operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator
const iceTeaPrice = 20
iceTeaPrice >= 80 ? console.log("less then 80") : console.log("more than 80");