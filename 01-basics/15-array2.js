// todo: When we push one array in another array, then the pushed array is merged as an element.
// let myHeros = ["Bakar", "Umar", "Usman", "Ali"]
// let ourHeros = ["Hassan", "Hussain"]
// myHeros.push(ourHeros)
// console.log(myHeros);
// ! concatination of two arrays will merge the two arrays. Also we came to know that concatination returns a new array
// let myHeros = ["Bakar", "Umar", "Usman", "Ali"]
// let ourHeros = ["Hassan", "Hussain"]
// let myAllHeros = myHeros.concat(ourHeros)
// console.log(myAllHeros);

/ Merging of two arrays using spread operator /
// let myHeros = ["Bakar", "Umar", "Usman", "Ali"]
// let ourHeros = ["Hassan", "Hussain"]
// let myAllHeros = [...myHeros, ...ourHeros]
// console.log(myAllHeros);

// ? flat returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. We can take the depth as infinity.
// const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_array = array.flat(2)
// console.log(real_array);

// ! Check either it is an array or not
// const myData = 'Hitesh'
// console.log(Array.isArray(myData)); //false
// const myData = [1, 2, 3, 4, 5]
// console.log(Array.isArray(myData)); //true

// todo: Convert a string into an array, but observe that its type is object.
// const myData = 'Hitesh'
// const myArray = Array.from(myData)
// console.log(myArray);
// console.log(typeof myArray);

// ! Make an array from object. It gives us an empty array. In order to make a non empty array, we have to tell to make an array of keys or values
// const obj = {
//     name: "Asghar",
//     lastName: "Ali"
// }
// const myArray = Array.from(obj)
// console.log(myArray);

// todo: Make an array of given values of the variables
// let score1 = 100
// let score2 = 200
// let score3 = 300
// const newArray = Array.of(score1, score2, score3)
// console.log(newArray);
