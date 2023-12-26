// todo: Javascript arrays are resizable. Array elements can not be accessed using arbitrary strings as index.
// todo: It creates shallow copy when copy operation is performed.
/ Shallow copy of an object is a copy whose properties shares the same reference. It means whatever change will be made that will be reflected in the original array. Deep copy does share the same reference. /
// * Array Methods //
const myArray = [1, 2, 3, 4, 5]
const myHeros = ['Ali', 'Umar', 'Bakar', 'Usman']
// myHeros.push('Hassan')
/* Another way of declaring an array */
const myNewArray = new Array(1, 2, 3, 4, 5, 6)
// console.log(myArray);
// console.log(myHeros);
// console.log(myNewArray);
// console.log(typeof myArray); //Object
// console.log(myArray[3]); // Its index starts from zero
// ! Push method is used to add an element in the end of an array. Pop method removes last element of an array.
// console.log(myHeros);
// myHeros.pop()
// console.log(myHeros);

// ? Unshift method is used to add an element in the begining of an array. Shift method is used to removed the first element of an array.
// myHeros.unshift("Hussain")
// console.log(myHeros);
// myHeros.shift()
// console.log(myHeros);
// ! Includes method is used to know that a particular entries is present in the array or not.
// console.log(myHeros.includes("Hassan")); //false
// ? IndexOf method is used to know the index of an element. If the element is not present in the array, index is -1.
// console.log(myHeros.indexOf("Umar")); //1
// console.log(myHeros.indexOf("Hussain")); // -1
// ! Join method adds all the elements of an array into a string, separated by the specified separator. Thus the output is a string.
// const newArray = myArray.join()
// console.log(newArray); // string
// console.log(typeof newArray); // string

// todo: slice method returns a copy of section of an array and does not change the original array. Splice method removes a section of an array and also changes the original array.

// console.log(myArray);
// const mySliceArr = myArray.slice(1, 3)
// console.log("A", mySliceArr);
// console.log(myArray);
// const mySpliceArr = myArray.splice(1, 3)
// console.log("B", mySpliceArr);
// console.log(myArray);


