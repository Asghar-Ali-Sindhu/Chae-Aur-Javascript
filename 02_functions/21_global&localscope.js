// todo: Concept of scope. values of a, b and c should not be accessed outside the scope.
// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30
// }
// console.log(a); // a is not defined
// console.log(b); // b is not defined
// console.log(c); //30 Value of var can be accessed outside the scope, which was the problem with var. This is the main reason of introduction of let and const


// ! Another scenario. Either var is declared in the scope or simply reassigned, the value of c will be 30.
// var c = 300;
// if (true) {
//     let a = 10;
//     const b = 20;
//     // var c = 30;
//     c =30
// }
// console.log(c);

// todo: Global Scope: Whatever code is written outside the scope is also available inside the scope. However, scope code could not be accessed outside the scope.
//! Global scope is different in node and browser