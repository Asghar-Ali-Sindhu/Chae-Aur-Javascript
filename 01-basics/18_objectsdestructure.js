// todo: de-structuring
const course = {
    coursename: "js in hindi",
    price: '999',
    courseInstructor: 'hitesh'
}
const { coursename, price, courseInstructor:instructor } = course
console.log(coursename);
console.log(price);
console.log(instructor);