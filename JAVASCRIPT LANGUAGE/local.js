// protocall -> http or https
// domain -> www.fb.com
// port -> 5500



// there four function for data 

// setItem() -> data store in localstorage
// getItem() -> data retreive in localstorage
// removeItem() -> particular data remove in localstorage
// clear() -> all data clear in localstorage


// localstorage data ->  type string => key and value format

// localStorage.setItem("name","Mohit")
// localStorage.setItem("age",54)
// if we give same data ye override kr dega because key always unique
// localStorage.setItem("name","Manish")
// localStorage.setItem("name1","Rohit")

//  let age = localStorage.getItem("age")
//  alert(age)

//  let fname = "Hello Mohit yadav";
//  localStorage.setItem("fname",fname)


// let name = document.getElementById('name')

function fun(){
    
let name = document.getElementById('name').value
localStorage.setItem("name",name)


 let contact = document.getElementById('cont',cont).value
 localStorage.setItem("contant",contact)
 

 let  email = document.getElementById('email',email).value
localStorage.setItem("email",email)

 let city = document.getElementById('city',city).value
 localStorage.setItem("city",city)

 return false;


}


// localStorage.removeItem("name ") // with the help of key we can remove data 
//localStorage.clear() // it clear all data of local storage


// homework ek form banana hai jb submit krai to dusre page pe data show ho jahe like my name is: "mohit"

// or ek logout ka button bananan hai jb uspe click karein to pura data delete ho jahe us page pe se