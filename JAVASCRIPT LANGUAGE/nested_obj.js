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
    
    
let insaan = {
    name: "Mohit",
    age : 20,
    city: "Gwalior",
    fun:function(){
        console.log(this.name);
    }
}
insaan.fun();


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