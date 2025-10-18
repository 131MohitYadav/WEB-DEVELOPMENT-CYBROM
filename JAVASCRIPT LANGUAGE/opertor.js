
// // write a progrma to print area of circle
// // let r = parseFloat(prompt("Enter a  radius of circle"))
// // document.writeln("Area of circle is: " + 3.14*r*r)

// // write to square number 

// let n = parseInt(prompt("Enter any number: "))
// document.writeln(n * n);

// // to swap two number

// let num1 = parseInt(prompt("Enter first number"))
// let num2 = parseInt(prompt("Enter second number"))


// let num3 = num2;
// num2 = num1;

// document.writeln(num3);
// document.writeln(num2);

// // write a prorgram to find area of rectangle

// let  length = parseInt(prompt("Enter the length:  "));
// let breadth  = parseInt(prompt("Enter the breadth: "));

// document.writeln( " ARea of REctangle: " +  length * breadth)



// FOR IN LOOP REVISTION

// document.writeln("FOR IN LOOP IN JAVASCRIPT")
// document.writeln()

// let arr = [ 2, 3 ,4 , 52, 23, 35, 233 , 28];
// for( let val of arr){
//     if ( val % 2 != 0){
//         document.writeln(" ")
//         document.writeln(val);
//     }
// }


 let ar = ["hello" , 23, "Yadav"]
// ar.push("Mohit" , "Kajal") // Push function insert data in last postion
// console.log(ar);


// 

// ar.unshift("Hii" , "logo") // Unshift function is used to  insert data in first position
// console.log(ar);
 

// ar.shift() // remove data from first postion
// console.log(ar);

 // slice function // 

 // cut subarray from the given array

 // if starting index will be star a till b but b  ko nhi ginte hai index mai 

 let ar1 = ["Mohit" , 24 , 131 , "Bhopal" , "MP" , "India", 22];
            // 0   // 1. // 2. // 3.     // 4.   // 5.  // 6        
//  console.log( ar1);

//  let piece = ar1.slice(2,5) // starting index from 1 to 3 end
//  console.log(piece);
 
 
// splice use to delte or insert element in the array at any position
ar1.splice(233, 23, "Nothing")
//console.log(ar1);


let head = document.getElementById("head")
console.log(head)
document.writeln("<h2> Hello From Js in Dom(Document object model")
document.writeln("/n")
document.writeln("Hello From JavaScript")


// return node list in array format

let Ctarget = document.getElementsByClassName("contant2")