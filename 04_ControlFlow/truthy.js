const userEmail = "Anvesh@example.com"

if (userEmail) {
    // console.log("You have an email")
} else {
    // console.log("You don't have an email")
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

// Nullish Coalescing Operator (??) : null or undefined


let val1;
 val1 = 5 ?? 10
val1 = null ?? 10

val1 = undefined ?? 10

val1 = null ?? 10 ?? 20

// console.log(val1)

// Ternary Operator
// conditon ? true : false

const iceTeaPrice = 50
 iceTeaPrice >= 80 ? console.log("I will not order IceTea") : console.log("I will order IceTea")