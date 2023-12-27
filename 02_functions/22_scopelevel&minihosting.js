// ! let having defined globally can be reassigned in local scope. However, it can not be redeclared
// let a = 10;
// if (true) {
//     a = 20;
//     console.log(a);
// }
// console.log(a);
//  ? Redeclaration
// let a = 10;
// if (true) {
//    let a = 20;
//     console.log(a);
// }
// console.log(a);

// todo: Const defin
// const b = 50;
// if (true) {
//      const b = 40;
//     console.log(b);
// }
// console.log(b);
// ! Small kids can take icecream from old ones but old ones can not get ice cream from kids. This behaviour is called closure
// function one() {
//    const userName = "Asghar"
//         function two() {
//             const website = "outube"
//             console.log(userName);
//     }
//     // console.log(website);
//     two();
// }
// one();

// todo: Different Scenario
// if (true) {
//     const userName = "Hitesh"
//     if (userName === 'Hitesh') {
//         const website = " youtube"
//         console.log(userName + website);
//     }
//     console.log(website); // can not be accessed
// }
// console.log(userName); // can not be accessed

// ***** Interesting Example *****  //
