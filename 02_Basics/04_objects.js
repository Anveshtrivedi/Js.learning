//const tinderUser = new Object() // -> this is the singleton object.
const tinderUser = {} // -> this is the object literal syntax.

tinderUser.id = '123abc'
tinderUser.name = 'Anvesh'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: 'some@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'Anvesh',
            lastName: 'Trivedi'
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName) 

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = {3: 'a' , 4: 'b'}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "A@gmail.com"
    },
    {
        id:2,
        email: "B@gmail.com"
    },
    {
        id:3,
        email: "c@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    name: 'js in hindi',
    price: '999',
    courseInstructor: 'Hitesh  Choudhary'
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);


// ******************* JSON APIs **************** //

// {
//     "name": 'Anvesh',
//     "coursename": 'Javascript',
//     "price": '999'
// }

// {
//     {},
//     {},
//     {}
// }

