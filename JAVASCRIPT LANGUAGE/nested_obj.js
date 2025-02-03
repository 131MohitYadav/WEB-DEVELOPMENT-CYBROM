// let person_std = {
//     name : "Mohit",
//     age : 20,
//     contact:8985625556,
//     Account_stat:{
//         account_balance:120000,
//         account_no:898754
//     },
//     personal_details:{
//         martial_status:"unmarried",
//         dob:"12 jan 2025"
//         },
//         document:[1234343,"8556ASF"],
//         // fun:function(){
//         //     alert("inside object")
//         // },
//         // fun1:function(name){
//         //     alert("any object pass through function  "+name)
//         // }
//     }
    
//     console.log(person_std.Account_stat.account_balance);
//     console.log(person_std.document[1]);
//     //person_std.fun();
//     person_std.fun1("Mohit")
    
    // let demo = document.getElementById('demo')
    // demo.innerHTML = "Hello Mohit"
    // demo.style.color="red"
    // demo.style.textAlign="center"


    // const person1 = {
    //     firstName: "mohit",
    //     LastName: "Yadav",
    //     id: 5485,
    //     fullname : function(){
    //         return this.firstName + " " + this.LastName;
    //     }
    // };

let person = {
    name: "Mohit",
    age : 20,
    city: "Gwalior",
};
     person.nam = function(){
        return(this.name).toUpperCase();
    };

let demo = document.getElementById('demo5')
demo.innerHTML = "My name is : " + person.nam();



    
let insaan = {
    name: "Mohit",
    age : 20,
    city: "Gwalior",
    fun:function(){
        console.log (this.name).toUpperCase();
    }
}
insaan.fun()

let insaan1 = {
 firstname: "Rohit",
 age : 12,
 city: "Tekanpur",
};
 insaan1.man = function(){
    return(this.firstname).toUpperCase();
 };

 let para = document.getElementById('demo')
 para.innerHTML = "The age of person: " + insaan1.man();


// for in loop  print the key value of object

// let ob = {
//     name:"mohit",
//     age:20,
//     contact:48788855
// }
// for ( let ky in ob){
//     console.log(ky);
// }

// if we print value only
let ob = {
    name:"mohit",
    age:20,
    contact:48788855
}
for ( let ky in ob){
    console.log(ob[ky]);
}

let ob1 = {
    name:"Rohit",
    age:25,
    city:"Gwalior"
    
}
for (let c in ob1){
    console.log(ob1[c])
}