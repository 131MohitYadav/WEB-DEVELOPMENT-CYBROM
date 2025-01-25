
// destructure
let [name,age,city,course] = ["Mohit",32,"Bhopal","FSD"];
console.log(name,age);

//  spread operator(...)

let ar1 = [1,2,3,4]
let ar2 = [7,7,8,9]
let ar3 = [...ar1,...ar2]
console.log(ar3);


// Write a program to find the even number after that squaring of the even number and store the number in another array

let ar5 = [];
let ar4 = [1,2,3,4,5,6,7,8,9,10]

for ( let x of ar4){
    if ( x % 2 == 0){
        ar5.push(x*x)
        
    }
}
console.log(ar5)


