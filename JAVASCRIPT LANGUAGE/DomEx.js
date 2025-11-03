// // GET ELEMENT BY ID
// const container = document.getElementById('container');
// const myButton = document.getElementById('myButton');

// // Get elements by class name (return HTMLCollection)
// const textElements = document.getElementsByClassName('text');

// // Get elements by tag name ( return HTMLCollections)
// const paragraphs = document.getElementsByTagName('p');


// // textContent
// const box = document.getElementById('box')

// let b = box.textContent("hello <Strong>mohit</Strong>");
// document.writeln(b);


// // METHOD 1 USING IMAGE CONSTURCOTR

// const img = new Image();
// img.src = 'https://Picsum.photos/300/200';
// img.alt = 'Random image';
// img.className = 'my-image';
// img.onload = () => console.log('Image loaded successfully');
// img.onerror = () => console.error('Failed to load image');

// document.body.appendChild(img);


// // Finding elemtns in array topic

// let numbers = [ 10, 20 , 30, 40 , 50];

// console.log(numbers.indexOf(30)); // 2

// // check if elmetns exists
// console.log(numbers.includes(20)); // true

// // find first elemnt that matches considtion
// let result = numbers.find(num => num > 25);
// console.log(result)

// let title = document.getElementById('container');
// let content = document.querySelector('.content');
// const allItems = document.querySelectorAll('li');

// // modifying content
// title.textContent = "updated Title";
// content.innerHTML = "<strong>Bold content</strong>";

// // changing styles
// title.style.color = "blue";
// title.style.fontSize = "24px";

// adding/ removing classes
// content.classList.add("highlight");
// content.classList.remove("content")

// // creating new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = "This is a new paragraph";
// document.getElementById('container').appendChild(newParagraph);

// // removing elemtns
// const button = document.getElementById('myButton');
// button.remove();


                               // EVEN HANDLING // 

                               // basic event listener
                               const button = document.getElementById('myButton');
                               button.addEventListener('click', function(event){
                                console.log('Button Clicked');
                                
                               }
