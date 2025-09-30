// if

const isUserLoggedIn = true
const temperature = 15;

// if(temperature < 20) {
//     console.log("It's cold outside" );
// }
// else { 
//     console.log("Not that cold" );
// }

// const score = 200
// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
//     console.log(`User power: ${power}`);

// Above program will throw an error because power is defined inside if block and not accessible outside it.

// const balance = 1000

// if(balance) {
//     console.log("less than 500");
// }
//     else if(balance < 750){
//         console.log("less than 750");
// }
//     else if(balance < 900){
//         console.log("less than 900");
// }
//     else {
//         console.log("more than 900");
// }

const isUserLogIn = true
const debitCard = true
const loggedInFromGoogle = false    
const loggedInFromFacebook = true

if(isUserLoggedIn && debitCard) {
    console.log("Allow user to make a purchase");
}
if(loggedInFromGoogle || loggedInFromFacebook) {
    console.log("User logged in");
}
    else {
        console.log("You are not allowed to make a purchase");
    }