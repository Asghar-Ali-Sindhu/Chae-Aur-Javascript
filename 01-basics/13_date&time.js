/ Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970. It calculates usually in milliseconds / 
// let myDate = new Date()
// console.log(myDate); //2023-12-26T11:44:50.350Z which is not readable
// console.log(myDate.getDate());
// console.log(myDate.getDay()); // starts from Monday
// console.log(myDate.getFullYear());
// console.log(myDate.getTime());// It gives time in milli seconds since 01 jan 1970
// console.log(myDate.getMonth()+1);// 0 for january, 1 for february and so on. Hence we add 1 to show the exact month.
// console.log(myDate.toString()); // Tue Dec 26 2023 16:47:51 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toDateString()); // Tue Dec 26 2023
// console.log(myDate.toISOString()); // 2023-12-26T11:51:58.080Z
// console.log(myDate.toJSON()); // 2023-12-26T11:52:51.219Z
// ! Type of Date
// const myDate = new Date()
// console.log(typeof myDate); // Object

// todo: Create a particular date. This can be used to know the day of a particular date in future
// let myCreatedDate = new Date(2025,07, 15)
// console.log(myCreatedDate.toDateString());

// ! Another format of date
// let myCreatedDate = new Date("2024-01-14")
// let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

// todo:
// let myTimeStamp = Date.now()
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.getTime());
// console.log(myTimeStamp);
 
// ! Another method to find date, day etc
// let newDate = new Date()
// newDate.toLocaleDateString('default', {
//     weekday: "long",
//     month: "long"
// })
// console.log(newDate);