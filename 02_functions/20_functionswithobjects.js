// ! When we are not aware about how many arguments are coming
// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(100,200,300));  // 100. It will take the first argument and use it.

// todo: Its output is an array which consists of all the arguments
// function calculateCartPrice(...num1) {
//        return num1
// }
// console.log(calculateCartPrice(100,200,300));

// ? We can return the values using array
// function calculateCartPrice(val1, val2, ...num1) {
//        return [val1, val2, num1]
// }
// console.log(calculateCartPrice(100,200,300,2000));


// ! Use of functions in object.
// const user = {
//     username: "Asghar",
//     price: 199
// }
// function handleObject(anyObject) {
//    console.log(`Username is: ${anyObject.username} and price is: ${anyObject.price}.`);
// }
// handleObject(user)

// ? We can directly pass the object
// function handleObject(anyObject) {
//    console.log(`Username is: ${anyObject.username} and price is: ${anyObject.price}.`);
// }
// handleObject({
//     username: "Asghar",
//     price: 199
// })

//todo: The problem arises when a particular entry is not available
// const user = {
//     username: "Asghar",
//     prices: 199
// }
// function handleObject(anyObject) {
//    console.log(`Username is: ${anyObject.username} and price is: ${anyObject.price}.`);
// }
// handleObject(user) //Username is: Asghar and price is: undefined.

//! Generic way of using function with arrays
// const myNewArray = [200, 400, 100, 600]
// function returnSecondValue(getArray) {
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));

//? We can directly pass an array
// function returnSecondValue(getArray) {
//     return getArray[1]
// }
// console.log(returnSecondValue([200, 400, 100, 600]));