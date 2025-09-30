const userEmail = "Anvesh@example.com"

if (userEmail) {
    console.log("You have an email")
} else {
    console.log("You don't have an email")
}

// 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values    
// true, {}, [], 42, "0", "false", new Date(), -42, 3.14, -3.14, Infinity, -Infinity, function(){}, -BigInt(1)

// if(userEmail.length===0){
//     console.log("Array is empty")
// }

// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty")
// }