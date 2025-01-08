function validate(){
let name = document.getElementById('name').value
let age = document.getElementById('age').value

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

}