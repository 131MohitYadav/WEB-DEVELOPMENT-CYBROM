const multi = () => {
    let userdata = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }
    localStorage.setItem("userdata",JSON.stringify(userdata))
}