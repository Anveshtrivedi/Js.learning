const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc+currVal;
// },0)

// const myTotal = myNums.reduce((acc,currVal)=> acc+currVal,0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
    {
        itemName: "Web Development Course",
        price: 3999
    },
    {
        itemName: "Python Course",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+ item.price,0)

console.log(priceToPay);
