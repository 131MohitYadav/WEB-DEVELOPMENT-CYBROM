let emp = [
    {
        name:"Mohit",
        age:21,
        city:"bhopal",
        id:101
    },{
        name:"Manish",
        age:25,
        city:"indore",
        id:101
    },{
        name:"Vikash",
        age:27,
        city:"Gwalior",
        id:101
    }
]
let data = emp.map((e)=>{
    return e.age
})
console.log(data);
console.log(data[0])

let fdata = emp.filter((s)=>{
   // return s.name=="Mohit" 
   return s.age > 25
})
console.log(fdata);
