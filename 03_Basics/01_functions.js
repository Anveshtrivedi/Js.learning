// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result;
}
const result = addTwoNumbers(5,7)
// console.log("Result: ",result);

 function loginUserMessage(username = "Guest"){
    if(username===undefined){
    console.log("Please enter username");
    return
    } 
    
    return `${username} just logged in`
 }
//  console.log(loginUserMessage("Anvesh"));
//  console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Anvesh",
    price: 500,
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
}

// handleObject(user)
// another way to pass object

// handleObject({
//     username: "Guest",
//     price: 300,
// })

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

// another way to pass array
// console.log(returnSecondValue([100,300,500,700]));

