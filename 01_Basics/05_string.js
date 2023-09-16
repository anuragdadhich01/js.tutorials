const name = "Anurag"
const repocount = 5 

//console.log(name + repocount + "Value" ); too old method try somthing new

console.log('Hello my name is ${name} and my repo count is ${repocount} ');

const gameName = new String('Anurag-ji')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString =  gameName.substring(0,4)
console.log(newString);

const anotherString =  gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  Anurag  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anurag.com/anurag%025dadhich"
console.log(url.replace('%025','-'));

console.log(url.includes('dadhich'));

console.log(gameName.split('_'));