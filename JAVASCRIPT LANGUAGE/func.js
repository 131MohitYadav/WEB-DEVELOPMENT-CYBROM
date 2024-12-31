//  function identifier(){
//    code
// }
//  function call

  // 3 tareke se function ko use karenghe

//  function declaration
//  function defination
//  function call

// function add (){
//     console.log("hello Mohit ");
    
// }
// add()

// wap to add two numbers using function

// function add(a,b){
//     console.log(a+b)
// }
// add(5,7)
// wap to print a table of any number using function

//  let a = parseInt(prompt("ENTER ANY NUMBER"))
// function table(a){
//     for(let i=1;i<=10;i++){
//         console.log(a * i);
//     }
    
// }
// table(a)
        
// wap to take a input from the user if number is between 11-20 then print 1 to of that given number and if number is between 1-10 then print 15 to 1

// let a = parseInt(prompt("ENTER ANY NUMBER"))
// function table(a){
//     if(a>=11 && a<=20){
//         for(let i=1;i<=a;i++){
//             console.log(i);
//             }
//             }
//             else if(a>=1 && a<=10){
//                 for(let i=15;i>=1;i--){
//                     console.log(i);
//                     }
//                     }
//                     else{
//                         console.log("NUMBER IS NOT BETWEEN 1-20")
//                     }
//                     }
//                     table(a)  

    // wap to print sum of all numbers between 1-12

// function sum(){
//     let sum = 0;
//     for(let i=1;i<=12;i++){
//         sum = sum + i;
//         }
//         console.log(sum);
//     }
//     sum()



    // function fun(num){
    //     console.log(num)
    // }
    // fun(10)


    // Write a program to add two number using function with argument and no return value



// function fun(a,b){
//     console.log(a+b)
// }

// let num1 = parseInt(prompt("ENTER FIRST NUMBER: "))
// let num2 = parseInt(prompt("ENTER SECOND NUMBER: "))


// fun(num1,num2)


// without argument and return value

// function demo(){
//     return "Mohit"
// }

// 

// let a = demo() // ye tb use krenghe jab kohi operation perform krana ho
// console.log(a);

// or 

// console.log(demo)

          // with argument and return value //

        //   function code(a){
        //     return a*a
        //   }

        //   let b = code(2)

        //   if(b%2==0){
        //     alert("even")
        //   }
        //   else{
        //     alert("Odd")
        //   }

        // or

// console.log(code(2))




// function code(a){
//             return a*a*a
//           }

// let a = parseInt(prompt("ENTER ANY NUMBER"))
// let ans = fun(a)

// for(let i = 0 ; i<=ans ; i++){

//     for(let j = 0 ; j <= i; j++ ){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// user se input lena hai suppose user deta hai 123 number uska addition chaheye by using function with argument and no return value

function fun(n){
  
  let sum = 0;
  while(n!=0){
   let r = n % 10; // 123
   sum = sum + r;
   n = n/10;
  }
  console.log(parseInt(sum))
}
let n = parseInt(prompt("ENTER ANY NUMBER"))
fun(n)












