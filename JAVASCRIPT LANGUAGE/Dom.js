
// homework question 
// what is hoisting
// what is ES6 AND ECMA

// return single node 
let head = document.getElementById("head")
console.log(head);
head.style.color="red"
head.style.textAlign="center"
head.style.fontSize = "40px"
head.style.fontStyle= "italic"
head.style.fontWeight = "bold"

// document.write(" <i>Hello Mohit Yadav</i>")
// return nodelist in array format same as document.getElementsByTagName
let head2 = document.getElementsByClassName("content2")
console.log(head2); // it does not change any text
head2[1].innerHTML = "<i>Aman kumar </i>"
head2[2].textContent = " <i>Manish Kumar</i>"

// change the value of an attribute

// document.getElementById('picture').src = "codechef.jpg"

let photo = document.getElementById("picture")
console.log(photo);
photo.src = "codechef.jpg"

document.write(Date())

// document.getElementById("head").style.color= "red";
// document.getElementById("head").style.fontSize = "50px";
// document.getElementById("head").style.fontFamily = "Arial";





