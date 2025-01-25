// let ar = []

// for(let a = 0 ; a<10 ; a++){
//     ar[a] = parseInt(prompt("Enter 10 digits"))
// }

// let sum = 0

// for(let a=0; a<10; a++){
//     sum = sum + ar[a]
// }

// console.log(sum);

// push
let ar = ['q',12,'Cybrom']
ar.push("manish","helloo")
console.log(ar);

// let my = ['y',23,'Mohit']
// my.push("Yadav")
// console.log(my);


// pop
ar.pop()

console.log(ar);

// unshift -> add the first index place of the value
ar.unshift("chashma","lagao")
console.log(ar);

// shift -> remove the first index place value
ar.shift()
console.log(ar);

//slice -> remove the element middle of the array value

let ar1 = ["Manju bhai",23,123,"Bhopal","MP","India",28];
console.log(ar1);

// let peice = ar1.slice(1,3)
// console.log(peice);

// first give the index value then give the number of elements
ar1.splice(1,0,"cybrom")

console.log(ar1);




