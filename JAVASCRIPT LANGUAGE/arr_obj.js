let emp = [
    {
        name:"Hiresh",
        age:45,
        contact:47885,
        id:101
    },{
        name:"Mohit",
        age:21,
        contact:98785,
        id:102
    },{
        name:"Vikash",
        age:40,
        contact:57885,
        id:103
    }
]
// console.log(emp);
// console.log(emp[1]);
// console.log(emp[1].name);

let newob = {
        name:"Manish",
        age:32,
        contact:98885,
        id:104
}

// emp.push(newob)
// console.log(emp);

emp.pop(newob)
console.log(emp);

emp.unshift("Aman")
console.log(emp)

emp.shift()
console.log(newob);

emp.slice(1,3)
console.log(emp)

emp.splice(1,0,newob)





