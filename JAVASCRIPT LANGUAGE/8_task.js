// let frm = document.getElementById('myform')
// frm.body.style.backgroundColor = "red";


function fun() {
   let name = document.getElementById("name").value;
   let cont = document.getElementById("cont").value;
   let eml = document.getElementById("email").value;
   let cty = document.getElementById("city").value;
   
   

   localStorage.setItem("username", name);
   localStorage.setItem("contact", cont);

   localStorage.setItem("email", eml);
   localStorage.setItem("city", cty);

   window.location.href = "Submit.html";
   return false;



}


