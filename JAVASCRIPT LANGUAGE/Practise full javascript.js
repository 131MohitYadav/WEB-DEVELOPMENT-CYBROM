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


// let fun1 = (a,b) => {
//     return(a + b)
// }

// let sum = fun1(2,2);
// console.log(sum)


/// Authentication login and signup ////

// const sign = () => {

//     let userdata = {
//         name: document.querySelector('#name').value,
//         // email: document.querySelector('#email').ariaValueMax,
//         pass: document.querySelector('#pass').value

    

//     }
//     localStorage.setItem("userdata",JSON.stringify(userdata))

// }


// let data = JSON.parse(localStorage.getItem('userdata'))
// console.log(data)


// function log(){
//     let logindata = {

//         logname:document.querySelector('#logname').value,
//         // logemail:document.querySelector('#logemail'),ariaValueMax,
//         logpass:document.querySelector('#logpass').value
//     }

// if ( data.name != logindata.logname  || data.pass != logindata.logpass){
//     alert("Incorrect username/email or password")
//     return false;
// }
// }


// map function and callback function

// let emp1 = [
//     {
//         name:"Mohit",
//         age:23,
//         city:"Gurugram",
//         id:877
//     },{
//         name:"Kajal",
//         age:25,
//         city:"Gurugram",
//         id:878
//     }
// ]

// let emp2 = [10,20,30,40,50]

// let data = emp1.map((e)=>{
//     return e.age
// })
// console.log(data);
// console.log(data[1])


// let data1 = emp2.filter((num)=>{
//     return num > 23;
// })

// console.log(data1)

// let emp3 = [33,23,24,53]

// let data3 = emp3.find((n)=>{
//     return n < 33;
// })

// console.log(data3)


// function add() {
//     let head = document.getElementById('head')
//     head.classList.add('dark')
//     head.style.backgroundColor='blue'
    
// }

// function rem(){
//     let head = document.getElementById('head')
//     head.classList.remove('dark')
// }


// function both(){
//     let head = document.getElementById('head')
//     head.style.backgroundColor='red'

// }


// check number positive or negative 

let num = Number(prompt('Enter a number'))

if ( num > 0){
    console.log('Positive');
}
else if(num < 0){

    console.log('Negative')

}
else{
    console.log("Zero")
}