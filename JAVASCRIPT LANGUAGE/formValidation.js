function validate(){
let name = document.getElementById('name').value
let age = document.getElementById('age').value
let contact = document.getElementById('contact').value
let email = document.getElementById('email').value

if (name == ""){
    alert("please fill your name")
    document.getElementById('name').focus()
    return false

}
else if(age == ""){
    let erage = document.getElementById('errorage')
    erage.innerHTML = "Please fill this field"
    document.getElementById('age').focus()
    return false
}
else if( isNaN(age)){
    let erage = document.getElementById('errorage')
    erage.innerHTML = "Age Should be in  number"
    let ag = document.getElementById('age')
    ag.style.color = "2px solid red"
    return false
}
else if( contact == ""){
    alert("Please enter contact number")
    document.getElementById('contact').focus()
    return false
}
else if( isNaN(contact)){
    alert("Please number should be in digits")
    document.getElementById('contact').focus()
    return false
}
else if( contact.length > 10 || contact.length < 10){
    alert("Enter valid number .. should be 10 digits")
    document.getElementById('contact').focus()
    return false
}
else if ( email == ""){
    alert("Please enter your email")
    document.getElementById('email').focus()
    return false
}
else if( !(email.includes('@'))){
    alert("Please enter valid email")
    document.getElementById('email').focus()
    return false
}

}