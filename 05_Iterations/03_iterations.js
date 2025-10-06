// for of loop (Array specific loop)

const arr = [10, 20, 30, 40, 50];

for (let num of arr) {
  //console.log(num);
}
 const greetings = "Hello World";
 for (let greet of greetings) {
 //  console.log(`Each char is: ${greet}`);
 }

 // Maps

    const map = new Map();
    map.set('IN', 'India');
    map.set('USA', 'United States of America');
    map.set('FR', 'France');

  //  console.log(map);
    
    for(const key of map) {
        //console.log(key);
    }

    for(const [key, value] of map) {
       // console.log(` ${key} :- ${value}`);
    }

   const myObject = {
    "game1" : "NFS",
    "game2" : "FIFA",
   }
   // Objects are not iterable by default in JS
   // we cannot use for of loop on objects directly
   // we can use for in loop on objects
   // we can convert object to map and then use for of loop
    // for(const [key, value] of myObject) {
    //     console.log(` ${key} :- ${value}`);
    // }