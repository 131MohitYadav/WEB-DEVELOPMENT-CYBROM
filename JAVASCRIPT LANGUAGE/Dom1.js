// createElement function use hota hai agar kohi tag create krna hua to
// agar kohi child ko parent class main dalna hai to append ka use krenge
// child class
let head = document.createElement("h1")
head.textContent = "Hello, We Are Developers!"
// parent class
let bd = document.body
bd.append(head)
bd.setAttribute('align','center')
bd.setAttribute('bgcolor','red')

let text = document.getElementById("head2")
text.removeAttribute('align')
// inline css
text.setAttribute('style' , "background-color:blue; color:white;")

