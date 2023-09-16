//arrays

const myArr = [0,1,2,3,4,5];
const myHeros = ["Ritik Kroshan"]

const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr[1]);

//Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.push(8);
// myArr.push(9);
// myArr.push(10);
// myArr.push(11);
// myArr.push(12);
// myArr.pop()

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()

// console.log(myArr);

// console.log(newArr);

//Slics, Splice

console.log("a", myArr);
const myn1 = myArr.slice(1,3)
console.log("b", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myn2);