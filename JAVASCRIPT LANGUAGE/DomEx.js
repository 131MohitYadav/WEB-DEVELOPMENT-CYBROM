// GET ELEMENT BY ID
const container = document.getElementById('container');
const myButton = document.getElementById('myButton');

// Get elements by class name (return HTMLCollection)
const textElements = document.getElementsByClassName('text');

// Get elements by tag name ( return HTMLCollections)
const paragraphs = document.getElementsByTagName('p');


// textContent
const box = document.getElementById('box')

let b = box.textContent("hello <Strong>mohit</Strong>");
document.writeln(b);


// METHOD 1 USING IMAGE CONSTURCOTR

const img = new Image();
img.src = 'https://Picsum.photos/300/200';
img.alt = 'Random image';
img.className = 'my-image';
