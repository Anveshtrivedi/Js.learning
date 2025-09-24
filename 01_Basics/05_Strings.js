const name  = "Anvesh"
const repoCount = 50;
//console.log(name +  repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// other way to declare a string - 

const username = new String('Anvesh-at')
// console.log(username[0]);
// console.log(username.__proto__);
// console.log(username.length);
// console.log(username.toUpperCase());

console.log(username.charAt(2));
console.log(username.indexOf('v'));

const newString = username.substring(0,4)
console.log(newString);

const anotherString = username.slice(-8, 4)
console.log(anotherString);

const newStringOne = " Anvesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Anvesh.com/Anvesh%20trivedi"
console.log(url.replace('%20', '-'));

console.log(username.split());



