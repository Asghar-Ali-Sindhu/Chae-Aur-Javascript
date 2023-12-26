// const tinderUser = new Object() //This is a singleton object
// console.log(tinderUser); // Empty object
// ! Insertion of entries in an object
// const tinderUser = {} //This is a non-singleton object
// console.log(tinderUser); // Empty object
// tinderUser.id = '123abc';
// tinderUser.name = 'Sammy'
// tinderUser.isLoggedIn = false
// console.log(tinderUser);
// todo: Nested objects
// const regularUser = {
//     email: "hitesh@google.com",
//     fullName: {
//         userfullname: {
//             firstName: "Hitesh",
//             lastName:"Chaudary"
//         }
//     }
// }
// console.log(regularUser.fullName.userfullname.firstName);

// ! Mergin objects
// let obj1 = { 1: "a", 2: "b" }
// let obj2 = { 3: "c", 4: "d" }
// let obj3 = { obj1, obj2 }
// console.log(obj3);// This is object containing two more objects

// ? The Object.assign() is a static method that copiesall enumerable own properties from one or more source objects to a target object. It returns the modified object. The {}, empty object is the target object and obj1, obj2, obj4 are the source objects.
// let obj1 = { 1: "a", 2: "b" }
// let obj2 = { 3: "c", 4: "d" }
// let obj4 = { 5: "e", 6: "f" }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

// ! Most useful
// let obj1 = { 1: "a", 2: "b" }
// let obj2 = { 3: "c", 4: "d" }
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// ? When the values are from database
// const user = [
//     {
//         id: 1,
//         email: "abc@gmail.com"
//     },
//     {
//         id: 2,
//         email: "hitesh@google.com"
//     }
// ]
// console.log(Object.keys(user));// We get an output as an array
// ! Another Example. We can get keys or values in the form of an array and we can apply for loop to access the entries.
// const tinderUser = {}
// console.log(tinderUser);
// tinderUser.id = '123abc';
// tinderUser.name = 'Sammy'
// tinderUser.isLoggedIn = false
// const key1 = Object.keys(tinderUser)
// for (let i = 0; i < key1.length; i++) {
//    console.log(key1[i]);
// }
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

//todo: Comparatively lesser used. It is an array containing arrays.
// const tinderUser = {}
// console.log(tinderUser);
// tinderUser.id = '123abc';
// tinderUser.name = 'Sammy'
// tinderUser.isLoggedIn = false
// console.log(Object.entries(tinderUser));

// ! To check either a particular property is there in the object
const tinderUser = {}
console.log(tinderUser);
tinderUser.id = '123abc';
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false
console.log(tinderUser.hasOwnProperty('isLogged')); // false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
/ To see the all other properties of an object, go to console and see the properties /