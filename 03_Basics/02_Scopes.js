
// var c = 300
let a  = 100
if (true){
    let a = 10
    const b = 20
    //console.log("Inside block: ",a);
    
}

 //console.log(a); 
// console.log(b);
// console.log(c);

function one(){
    const username = "Anvesh"
    function two(){
        const website = "Youtube"
         console.log(username);
    }
    // console.log(website);
     two()
    }
    // one()

if(true)   {
    const username = "Anvesh"
    if(username === "Anvesh"){
        const website = " Youtube"
       // console.log(username + website);  
    }
    //console.log(website); // -> Error will be thrown as website is not defined in this scope.
}
// console.log(username); // -> Error will be thrown as username is not defined in this scope.
 
// +++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++

// It can be called before its declaration
addOne(4)
function addOne(num) {
    return num + 1
}

// function can also be defined like this
// It can't be called before its declaration because of hoisting
// Here the function is treated like a variable
const addTwo = function(num) {
    return num + 2
}
addTwo(5)