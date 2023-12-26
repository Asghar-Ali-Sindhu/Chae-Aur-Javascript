//todo: problematic comparisons. When we make comparisons of two datatypes, please make sure the data types of both is same, otherwise there may be some problem. Typescript does not allow to compare two differen data types. However if we ourselves make some rules then we need not to go on typescript
// console.log("2" > 1); //true
// console.log("02" > 1); //true
// console.log(2 > "1"); //true
// console.log("02" > 1); //true
// console.log(null > 0); //false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// ? undefinde
// console.log(undefined == 0); //false
// console.log(undefined > 0);//false
// console.log(undefined < 0);//false

/ === is known as stritct check. This strict check also checks the data type togather with the equality of the value /
// console.log("2"==2); //true
// console.log("2"===2); //false because data types are different

// ! Types of data types
/* Data are divided into two categories depending upon 
i) how the data are stored
ii) how the data are accessed
Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt
Reference/Non-primitive:
Array, Object, Functions,


*/
// todo: Explanation of the symbol for uniqueness
// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId); // false
// // This means both symbol values are not same
