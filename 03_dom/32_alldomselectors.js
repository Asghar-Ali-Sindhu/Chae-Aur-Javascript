// todo: In console
// * We can select an elment by id
// const title = document.getElementById('title'); // title
// console.log(element.className); // heading
// ? Class over written here
// title.setAttribute('class', 'red')
// console.log(title.className); // It has over written the class
// ? In order to add a new class
// title.setAttribute('class', 'red heading')
// console.log(title.className); // It has added the class
// ? How to insert style
// title.style.backgroundColor = "teal";
// title.style.padding = "15px";

// todo:  All the three gives the same output
// console.log(title.textContent);
// console.log(title.innerHTML);
// console.log(title.innerText);
// ? Difference between innerText and textContent
// console.log(title.innerText); // It gives that text which is visible.
// console.log(title.textContent); // textContent gives both the hidden and visible text
// console.log(title.innerHTML);// This also gives the html inside
//! Selector to be used in real world
// const element = document.querySelector('h2');
// console.log(element); // It will select the first h2

// ? querrySelector and id
// const element = document.querySelector('#title');
// console.log(element);

// ? querrySelector and class
// const element = document.querySelector('.heading');
// console.log(element);

// ? querrySelector and input with type
// const element = document.querySelector('input[type="password"]');
// console.log(element);
// ?
// const element = document.querySelector('p:firstChild');
// console.log(element);
// ! Suppose we want to change the color of first list item / seond list element
// const element = document.querySelector('ul');
// const myFirstElement = element.querySelector('li')
// console.log(myFirstElement.nextElementSibling.style.color = "green");

// ? Change innerText
// const element = document.querySelector('ul');
// const myFirstElement = element.querySelector('li')
// console.log(myFirstElement);
// myFirstElement.style.backgroundColor ="teal"
// myFirstElement.style.padding = "15px"
// myFirstElement.style.borderRadius  = "15px"
// myFirstElement.style.innerHTML = "15px"

// console.log(myFirstElement);

/*************************************** 
 //**********************  querySelectorAll ******************* */
// ! Nodelist and HTML collections are not arrays, that is why they do not accept filter or map function.
//  const element = document.querySelector('ul')
// const elements = element.querySelectorAll('li')
//  console.log(elements);
// const gotElements = elements.map((item) => item)
// console.log(gotElements);  // no output-error

// todo: We can handle nodelist as under
// const myH1 = document.querySelectorAll('h1');
// // console.log(myH1);
// // myH1.style.color = 'red' //This will not work
// myH1[0].style.color = 'red'//This will work


// ? NodeList handled in querySelectorAll
// const myH2 = document.querySelectorAll('h2');
// console.log(myH2);
// // myH2.style.color = 'red' //This will not work
// myH2[0].style.color = 'red'//This will work
// myH2[1].style.color = 'blue'//This will work
// myH2[2].style.color = 'orange'//This will work


// ? Same can be done using forEach loop
// const myH2 = document.querySelectorAll('h2');
// console.log(myH2);
// myH2.forEach((item) => {
//     //    console.log(item);
//     item.style.backgroundColor = "grey"
// })

// ***********getElementByClassName **********/
// const items = document.getElementsByClassName('list-item')
// console.log(items);
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// ! It gives us an HTML collection, which does not have even forEach loop.

// todo: Conversion of HTML collection to an array.
const items = document.getElementsByClassName('list-item');
const myArray = Array.from(items);
console.log(myArray);
myArray.forEach(element => {
    console.log(element.innerHTML);
});




 
