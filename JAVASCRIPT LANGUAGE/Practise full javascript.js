// let arr = [ 101, "Yadav", "c" , true , 23.2]
// console.log(arr);

// // it print specific array index element 
// console.log(arr[3])

//// how to take input frome the user in array 

// let ar = [];
// for ( let i = 0; i < 5; i++){
//     ar[i] = prompt("ENTER ANY STRING")
// }
// console.log(ar)


// write a program to print odd number between 25 to 1

// let odd = [ ];

// for ( let i = 25; i > 0; i--){
//     if ( i % 2 != 0){

//         odd.push(i);
//     }
// }
// console.log(odd);


// write a program to take input 10 number from the user and print the output
// in array

// let num = [ ];
// let sum  = 0;
// for ( let n = 0; n < 10; n++) {

//     num[n] = parseInt(prompt("ENTER ANY NUMBER"));
//     let add = num[n];
//     sum = sum + add ;
// }
// console.log("SUM OF ALL NUMBER: " , sum)


// slice -> remove the emetn middle of the array value
// let arr = ["Moht Yad",23,323,"Gurugram", "Delhi"];
// // let m = arr.slice(2,4)
// let y = arr.splice(1,0,"Yadav");
// // console.log(m);
// console.log(y);

// how to used Arrow function

// let fun = () => {
//     return alert("Hello insed arrow function")
// }

// fun();


let fun1 = (a,b) => {
    return(a + b)
}

let sum = fun1(2,2);
console.log(sum)
