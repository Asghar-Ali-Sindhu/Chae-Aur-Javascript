// todo: Stack memory is used for primitive datatypes and heap memory is used for non-primitive/reference datatype. In case of stack memory, we get a copy and all the changes are performed in that copy. On the other hand, in case of heap memory, we get a reference and all the changes are made in the original.
// ! Example of stack memory. Let us take a primitive datatype string. We observe that a change happens only in the copy but not in original
// let myYoutubeName = "Hiteshchaudarydotcom"
// let anotherYoutubeName = myYoutubeName
// console.log(anotherYoutubeName);
// anotherYoutubeName = "Asgharalidotcom"
// console.log(myYoutubeName);
// console.log(anotherYoutubeName);

// ! Example of heap memory. Let us take a Non-primitive datatype object. We observe that a change happens in the original object.
// let userOne = {
//     firstName: "Asghar",
//     lastName: "Ali",
//     email:"zainmathinter@gmail.com"
// }
// let userTwo = userOne;
// userTwo.firstName = "Haris"
// console.log(userOne.firstName);
// console.log(userTwo.firstName);

