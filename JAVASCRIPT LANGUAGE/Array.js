let arr= [ 1,"mohit",'B',true,25.5]
console.log(arr);
// it print array element
console.log(arr[4]);

// with for loop in array

 for ( let a = 0; a < 5; a++)
 {
    console.log(arr[a]);
 }

 // with for of loop in array

 for( let b of arr){
    console.log(b);
 }

 // take input from the user

//  let ar = [ ];

//  for ( let c = 0; c < 5; c++)
//  {
//     ar[c] = prompt("ENTER ANY STRING")
//  }
//  console.log(ar)

 // Write a program to print odd numbers between 25 to 1 in array
 let odd = [ ];
 for ( let d = 25; d > 0; d--)
 {
    if ( d % 2 != 0){
        
        console.log(odd[d])
    }
 }

 // write a program to take input 10 number from the user and print the output in array