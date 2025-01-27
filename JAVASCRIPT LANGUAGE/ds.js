
// destructure
let [name,age,city,course] = ["Mohit",32,"Bhopal","FSD"];
//console.log(name,age);

let nam = document.getElementById('demo')
nam.innerHTML= city + " " + age
nam.style.fontSize="40px"
nam.style.color="blue"
nam.style.textAlign="center"


const person = {
    FirstName:"Mohit",
    LastName: "Yadav",
    Age: "20"

};

 let per =document.getElementById('demo2')
 per.innerHTML = person.FirstName + " " + person.LastName;
 per.style.color="red"
 per.style.fontSize="30px"
 per.style.textAlign="center"
 per.style.backgroundColor="yellow"




//  spread operator(...)

let ar1 = [1,2,3,4]
let ar2 = [7,7,8,9]
let ar3 = [...ar1,...ar2]
console.log(ar3);

// string merge
let ar10 = ["Mohit","Yadav","Manish","Kumar"]
let ar11 = ["Satyam","Singh","Vikash","Arya"]
let ar12 = [...ar10,...ar11]
console.log(ar12);



// Write a program to find the even number after that squaring of the even number and store the number in another array

let ar5 = [];
let ar4 = [1,2,3,4,5,6,7,8,9,10]

for ( let x of ar4){
    if ( x % 2 == 0){
        ar5.push(x*x)
        
    }
}
console.log(ar5)

// similarly for odd case


let ar7 = [];
let ar6 = [1,2,3,4,5,6,7,8,9,10]

for ( let y of ar6){
    if ( y % 2 != 0){
        ar7.push(y*y)
        
    }
}
console.log(ar7)


