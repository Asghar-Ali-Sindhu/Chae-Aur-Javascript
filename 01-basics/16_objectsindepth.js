/ * Object made from constructor is a singleton and from object literal is not a singleton */
// todo: Object.create() method is called constructor method and it gives a singleton object
// Object.create()
// ! Object literals. In case of arrays, we can access the elements of the object by [i] method. In objects, we can access keys and values. There are two ways to access data from an object.
// const JsUser = {
//     name: "Asghar",
//     "full name":"Asghar Ali",
//     age: 50,
//     location: "Multan",
//     email: "zainmathinter@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", 'Saturday']
// }
// console.log(JsUser.email); //First Method
// console.log(JsUser["email"]); //Second Method
// console.log(JsUser["full name"]); //We dont have any method to access full name using dot method

// ! I could not understand Symbol which is at 10 minutes in this video
// todo: How to change the values of an object
// const JsUser = {
//     name: "Asghar",
//     "full name":"Asghar Ali",
//     age: 50,
//     location: "Multan",
//     email: "zainmathinter@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", 'Saturday']
// }
// JsUser.location = "New York"
// console.log(JsUser);

    // ! / *How to new entries in an object */
// const JsUser = {
//     name: "Asghar",
//     "full name":"Asghar Ali",
//     age: 50,
//     location: "Multan",
//     email: "zainmathinter@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", 'Saturday']
// }
// JsUser.Password = 123;
// console.log(JsUser);
// todo: We can freez an object so that no change can happen in the object
// const JsUser = {
//     name: "Asghar",
//     "full name":"Asghar Ali",
//     age: 50,
//     location: "Multan",
//     email: "zainmathinter@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", 'Saturday']
// }
// // Object.freeze(JsUser)
// // JsUser.Password = 123;
// JsUser.name = "Changed"
// console.log(JsUser);

// ! How can we add a function to an object
const JsUser = {
    name: "Asghar",
    "full name":"Asghar Ali",
    age: 50,
    location: "Multan",
    email: "zainmathinter@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", 'Saturday']
}
JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}
// console.log(JsUser.greeting); // anonymous function
console.log(JsUser.greeting()); // Undefined
console.log(JsUser.greetingTwo()); // Undefined