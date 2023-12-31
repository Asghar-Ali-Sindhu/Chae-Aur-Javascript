// todo: forEach loop does not return any thing
// * Example:
// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach(element => {
//     console.log(element);
// });


// ? Sometimes we do not want to print all the values. We want to have some output for future, in that case foreach loop is not helpful.
// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach(element => {
//     // console.log(element);
//     // return item;
//     return values;
// });
// console.log(values);

// ! Filter function returns the values of the string which satisfies the specified condition.
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const greaterThanFour = myNums.filter((val) => val > 4)
// console.log(myNums);
// console.log(greaterThanFour);

// * If we starts the scope then we have use the return keyword
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const greaterThanFour = myNums.filter((val) => {
//     return val > 4
// })
// console.log(myNums);
// console.log(greaterThanFour);

// todo: To get the same result using forEach loop
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = [];
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });
// console.log(newNums);

// ! Real World example of the data
const books = [
    {
    title: 'Book One', genre: 'History', publish: 1986, edition: 1996
    },
    {
    title: 'Book Two', genre: 'Psychology', publish: 1990, edition: 2001
    },
    {
    title: 'Book Three', genre: 'Mathematics', publish: 2006, edition: 2012
    },
    {
    title: 'Book Four', genre: 'Physics', publish: 1990, edition: 1995
    },
    {
    title: 'Book Five', genre: 'Biology', publish: 1995, edition: 2000
    },
    {
    title: 'Book Six', genre: 'History', publish: 2001, edition: 2016
    },
    {
    title: 'Book Seven', genre: 'Human Resource', publish: 1991, edition: 1996
    }
]
// * Find History books
// const userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks);
// * Find all those books which are published after 2000
// const pubBooks = books.filter((bk) => bk.publish > 2000)
// console.log(pubBooks);

//* Find all books which are History genre and published after 1995
// const userBooks = books.filter((bk) => bk.genre === 'History' && bk.publish > 1995)
// console.log(userBooks);

//**************************************************************** */
// todo: map function
// ! Add 10 to each element using map function
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const enlargedNumbers = myNumbers.map((num) => num + 10);
// console.log(enlargedNumbers);

// ! Add 10 to each element using forEach loop
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const enlargedNumbers = []
// myNumbers.forEach((num) => {
//     enlargedNumbers.push(num + 10);
// })
// console.log(enlargedNumbers);

// ! When we two or more methods at a time, it is called chaining
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1);
// console.log(newNums);

// ? We can also apply different funcitons
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num % 17 == 0);
// console.log(newNums);

//****************************************** ****************************************/
// ! Reduce Method
// * Find the sum of the elements of the folowing array.
// const myNumbers = [1, 2, 3, 4, 5]
// const initialValue = 0;
// const sumWithReduce = myNumbers.reduce((accumlator, currentValue) => accumlator + currentValue, initialValue)
// console.log(sumWithReduce);

// ?  Another Way
// const myNumbers = [1, 2, 3, 4, 5,6]
// const sumWithReduce = myNumbers.reduce((acc, currValue) => {
//     return acc + currValue
// }, 0)
// console.log(sumWithReduce);
// ? Another Way
// const myNumbers = [1, 2, 3, 4, 5,6]
// const sumWithReduce = myNumbers.reduce((acc, currValue) =>
//      acc + currValue, 0)
// console.log(sumWithReduce);

//  ? If we want to know acc and currValue at each step
// const myNumbers = [1, 2, 3, 4]
// const sumWithReduce = myNumbers.reduce((acc, currValue) => {
//     console.log(`The acc value: ${acc} and currValue: ${currValue}`);
//     return acc + currValue
// }, 0)
// console.log(sumWithReduce);

// ? If the current value is 3
// const myNumbers = [1, 2, 3, 4]
// const sumWithReduce = myNumbers.reduce(function(acc, currValue) {
//     console.log(`The acc value: ${acc} and currValue: ${currValue}`);
//     return acc + currValue
// }, 3)
// console.log(sumWithReduce);

// ** Reduce using arrow function
// const myNumbers = [1, 2, 3, 4]
// const sumWithReduce = myNumbers.reduce((acc, currValue) => {
//     console.log(`The acc value: ${acc} and currValue: ${currValue}`);
//     return acc + currValue
// }, 3)
// console.log(sumWithReduce);

// ! Shopping Card Example
const shoppingCart = [
    {
        itemName: "Sugar",
        price: 450
    },
    {
        itemName: "Oil",
        price: 2450
    },
    {
        itemName: "Soap",
        price: 150
    },
    {
        itemName: "Lotion",
        price: 1200
    }
]
//  * Find the total bill of the shopping cart
// const myTotal = shoppingCart.map((item) => item.price).reduce((acc, curr)=>acc+curr,0);
// console.log(myTotal);

// * Find the total bill of the shopping cart using only reduce
// const myTotal = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
// console.log(myTotal);