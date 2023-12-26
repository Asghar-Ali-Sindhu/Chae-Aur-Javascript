// todo: Practice of numbers
// const score = 400
// console.log(score);
// const balance = new Number(100)
// console.log(balance);

/ This number is changed to string. When it becomes string it can access the string properties /
// const balance = new Number(100)
// const balanceString = balance.toString()
// console.log(balance.toString().length);
// console.log(typeof balanceString);
// ? Most important method that should be used in E-commerce websits
// const balance = 100
// console.log(balance.toFixed(4));

// ! Use of precision
// const number = 35.89445
// console.log(number.toPrecision(3));
// console.log(number.toPrecision(2));
// ! Other Exmaple of precision
// const number = 1235.89445
// console.log(number.toPrecision(3)); //1.24e+3
// console.log(number.toPrecision(2)); //1.2e+3


// todo: localeString
// const newNum = 10000000
// console.log(newNum);
// console.log(newNum.toLocaleString());
// console.log(newNum.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(Number.isInteger(2.5)); // false
// console.log(Number.EPSILON); // 2.220446049250313e-16
// console.log(Number.arguments); // 2.220446049250313e-16
// console.log(Number.NaN) // 2.220446049250313e-16
// console.log(Number.POSITIVE_INFINITY) // 2.220446049250313e-16


    // ********************** Math ******************** //
// todo: Math itself is an object and it has so many properties
// console.log(Math);
// console.log(Math.SQRT1_2); //sqrt(1/2)
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.LN2); //natural logarithm of 2
// console.log(Math.LN10); //natural logarithm of 10
// console.log(Math.LOG10E); // logarithm of 10 to the base e
// console.log(Math.abs(-10)); //absolute value of 10
// console.log(Math.acos(1)); //arcos of 1
// console.log(Math.round(43.56)); //44
// console.log(Math.round(43.26)); //43
// console.log(Math.ceil(43.56)); //44
// console.log(Math.floor(43.56)); //43
// console.log(Math.min(4,6,7,8)); //4
// console.log(Math.max(4,6,7,8)); //8
// console.log(Math.random()); // It generates a random number between 0 and 1 including both 0 and 1.
// console.log(Math.random() * 10); // value between 0 and 9
// console.log((Math.random() * 10) + 1); // value between 1 and 10

// ! Find random numbers between a certain given range including min and max numbers
// const min = 10
// const max = 20
// console.log(Math.round(Math.random()*(max - min + 1)) + min);
// const min = 1
// const max = 6
// console.log(Math.floor(Math.random()*(max - min + 1)) + min);
