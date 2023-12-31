// todo: We can access the userName by using user.userName but we want to access the username entered by any user.
// const user = {
//     userName: "Asghar Ali",
//     price: 200,
//     wellcomeMessage: function () {
//         console.log(`${user.userName}, welcome to website`);
//         console.log(this);
//     }
// }
// user.wellcomeMessage();
// user.userName = "Haris Ali";
// user.wellcomeMessage();


// ? For any user, we use the key word "this"
// const user = {
//     userName: "Asghar Ali",
//     price: 200,
//     wellcomeMessage: function () {
//         console.log(`${this.userName}, welcome to website`);
//     }
// }
// user.wellcomeMessage()
// user.userName = "Haris Ali"
// user.wellcomeMessage();
// user.userName = "Danish Ali"
// user.wellcomeMessage("Danish Ali");
// ! Discussion about this is incomplete


// ! Function
//  ** A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
// * Example: Function to compute the product of p1 and p2
// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// const product = myFunction(5, 6);
// console.log(product);

// ? Another way to invoke a function.
// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// console.log(`The product of two given numbers is: ${myFunction(5, 6)}`);

// todo: Function Invocation
// * i) The code inside the function will execute when "something" invokes (calls) the function: ii) When an event occurs (when a user clicks a button). iii) When it is invoked (called) from JavaScript code Automatically (self invoked)

// * Example: Convert Fahrenheit to Celsius:
// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }
// console.log(toCelsius(77));
// ? When nothing is passed as an argument in a function
// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }
// let value = toCelsius();
// console.log(value);  //NaN


// ? Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }
// let value = `The temperature is ${toCelsius(77)}`;
// console.log(value);

// ! Variables declared within a JavaScript function, become LOCAL to the function. Local variables can only be accessed from within the function.
// function myFunction() {
//   let carName = "Volvo";
//   console.log(carName); // code here can use carName
// }
// myFunction()
//   console.log(carName); // code here can NOT use carName