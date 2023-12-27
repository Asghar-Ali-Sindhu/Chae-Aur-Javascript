//todo: In order to repeat a particular set of codes for many times, we use function.
// console.log("H");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");
// console.log("h");
// ! If we want to print the same code for ten times. Here when we write name of the function "personName", this is called reference. "personName()" is the execution of the function.
// function personName() {
//     console.log("H");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }
// personName()

// ? Write a function to add two numbers
// function addTwoNumbers(a, b) {
//     console.log(a + b)
// }
// addTwoNumbers();  // NaN

// ! Addition of two numbers
// function addTwoNumbers(a, b) {
//    console.log(a +b);
// }
// console.log(addTwoNumbers(5, 6)); // 11

// todo: Additon of a number and a string
// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }
// addTwoNumbers( 3, "4") //34

// ! Addition of two numbers
// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }
// addTwoNumbers( 3, "a") //3a

// ! Addition of two numbers
// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }
// addTwoNumbers( 3, null) //3

// todo: Addition of two numbers
// function addTwoNumbers(a, b) {
//    console.log( a + b);
// }
// let result = addTwoNumbers(5, 7)  // 12
// console.log(result); // undefined because nothing is returned in this function.

// ! Addition of two numbers
// function addTwoNumbers(a, b) {
//     let sum = a + b
//     return sum
// }
// // console.log(addTwoNumbers(5, 7));  //12
// let result = addTwoNumbers(5, 8)
// console.log(result); //13

// ? Nothing will happen after return
// function addTwoNumbers(a, b) {
//     let sum = a + b
//     return sum
//     console.log(sum); //If we hover, it is unreachable code
// }
// let result = addTwoNumbers(2, 3)
// console.log("Result: ", result);


// ! Nothing will happen after return
// function addTwoNumbers(a, b) {
//     let sum = a + b
//     console.log(sum); //If we take it one line above, output is 5
//     return sum
// }
// let result = addTwoNumbers(2, 3)
// console.log("Result: ", result);


// todo: Another way of return. We can return directly without giving any name
// function addTwoNumbers(a, b) {
//     return a + b
// }
// let result = addTwoNumbers(2, 3)
// console.log("Result: ", result);

// ! Argument. What is the output of this function. Nothing is the output because we did not ask him to print any thing.
// function loginuserMessage(username) {
//     return `${username} just logged in`
// }
// loginuserMessage("Hitesh")

// ? We have save the output in a variable and then print or directly command the output to be printed
// function loginuserMessage(username) {
//     return `${username} just logged in`
// }
// let result = loginuserMessage("Hitesh")
// console.log(result); // Hitesh just logged in

// todo: If an string is passed as an argument
// function loginuserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginuserMessage("")); // just logged in

// ! If nothing is passed as an argument
// function loginuserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginuserMessage()); // undefined just logged in

// ? if username is undefined
// function loginuserMessage(username) {
//     if (username === undefined) {
//         console.log('Please enter a user name');
//     }
//     return `${username} just logged in`
// }
// console.log(loginuserMessage()); // undefined just logged in

// ! Alternative code if username is undefined
// function loginuserMessage(username) {
//     if (!username) {
//         console.log('Please enter a user name');
//     }
//     return `${username} just logged in`
// }
// console.log(loginuserMessage()); // undefined just logged in

// ? We can give a default value to a username. So Haris will be used as username if user do not pass any value, however if the user pass some value that will be over written.
// function loginuserMessage(username = "Haris") {
//     if (!username) {
//         console.log('Please enter a user name');
//     }
//     return `${username} just logged in`
// }
// console.log(loginuserMessage()); // undefined just logged in

// ! Over Written value
function loginuserMessage(username = "Haris") {
    if (!username) {
        console.log('Please enter a user name');
    }
    return `${username} just logged in`
}
console.log(loginuserMessage("Asghar")); // undefined just logged in