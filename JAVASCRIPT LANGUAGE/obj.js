// let ob = {
//     name : "Mohit", // key : value
//     age : 90,
//     city : "bhopal"
// }

//console.log(ob);

// let par = document.getElementById('demo')
// par.innerHTML = ob.name + " <br> " + ob.age;
// par.style.fontSize="40px"
// par.style.textAlign="center"


// To take input from the user value

function fun(){
let ob1 = {
    
    nam : document.querySelector('#name').value,
    age : document.querySelector('#age').value,
    email : document.querySelector('#email').value,
    pass : document.querySelector('#pass').value,
    cont : document.querySelector('#cont').value,
    
    
   
}

console.log(ob1.nam , "\n" , ob1.age , "\n", ob1.email , "\n" , ob1.pass , "\n" , ob1.cont);
return false
}