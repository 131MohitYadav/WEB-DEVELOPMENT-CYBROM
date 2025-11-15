// const form = document.createElement('form');
// form.innerHTML = `
// <input type = "text" id = "name" placeholder = "Enter your name" required><br>
// <input type = "email" id = "email" placeholder = "Enter your email" required>
// <button type = "submit">Submit</button>
// `;
// document.body.appendChild(form);


// form.addEventListener('submit' , (event) => {
//     event.preventDefault(); // prevenet form submission

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // ye automatic form submission ko rokega
})

    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value;

  
form.addEventListener('submit' , (event) => {
    event.preventDefault(); // prevenet form submission


    //validation
    if ( name && email){
        alert('Form submitted', {name, email});

        // validation
        if ( name && email){
            alert(`Thank you, ${name}`);
            form.reset();
        }
        else{
            alert('please fill in all fields');
        }
    }
});