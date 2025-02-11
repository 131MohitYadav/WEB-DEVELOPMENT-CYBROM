const multi = () => {
    let userdata = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }
    localStorage.setItem("userdata",JSON.stringify(userdata))


}

let data = JSON.parse(localStorage.getItem('userdata'))
console.log(data)

function loginform(){
    let logindata = {
        loginemail: document.querySelector('#loginemail').value,
        loginpassword:document.querySelector('#loginpass').value,
    }
    if ( data.email != logindata.loginemail || data.password != logindata.loginpassword){
        alert("User not Found")
        return false;
    }

}


let log = document.getElementsByClassName('sign')
log[0].style.color= "red"

let sign = document.getElementsByClassName('sign')
sign[1].style.color = "red"

let home = document.querySelector('#home')
home.style.color = "blue"
home.style.textAlign = "center"