//todo: const can not be redeclared nor it can be reassigned
// const accountId = 14445
// const accountId = 144
// accountId = 524
// console.log(accountId);

// ! let can not be redeclared, however let can be reassigned
// let accountEmail = "abc@googl.com"
// let accountEmail = "ac@googl.com"
// accountEmail = "dfd@googl.com"
// console.log(accountEmail);
// ? var can be redeclared. Also var can be reassigned
// var accountPassword = "12345"
// var accountPassword = "123454545"
// accountPassword = "12345678"
// console.log(accountPassword);

/ This is an irregular expression /
// accountCity = "Lahore"
// // accountCity = "Multan"
// console.log(accountCity);

// todo: Short method to console.log more than two variables. It will provide the whole information in the form of a table.
// console.table([accountId, accountEmail, accountCity])


// ? If a variable is declared but it is not assigned any vlaue, javascript assign it an undefined value. This variable is assigned either by using const or let
// let accountState;
// console.log(accountState);
// const account;
// console.log(account);

// ! Note: Do not use var because of issue in block and functional scope.
//! Use const for constants and let for variables
// ! Do not declare a variable without const or let