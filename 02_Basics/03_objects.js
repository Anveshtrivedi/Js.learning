// Singleton : object created by a constructor
// Object.create
// Object literals
const mySym = Symbol("key1");
const JsUser = {
    name: "Anvesh",
    age: 18,
    location: "Indore",
    [mySym]: "mykey1", // symbol as key
    email: "Anvesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"] 
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);


JsUser.email = "Anvesh@microsoft.com"
// Object.freeze(JsUser); // freeze the object
JsUser.email = "Anvesh@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
