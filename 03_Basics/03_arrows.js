const user = {
    username: "Anvesh",
    price: 1000,
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Guest" 
// user.welcomeMessage()

// this prints null in node environment but in browser it prints window object
//   console.log(this);

// arrow functions declaration 
const func = () => {    
    // console.log(this.username);
    // console.log(this);
}

func()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// This is knonw as implicit return that is if there is only one statement in the function we can remove the curly braces and return keyword
// const addTwo = (num1,num2) => num1 + num2 

// Or
// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(4,5));

const addTwo = (num1, num2) => ({username: "Anvesh"}) 
 console.log(addTwo(4,5)); 
 