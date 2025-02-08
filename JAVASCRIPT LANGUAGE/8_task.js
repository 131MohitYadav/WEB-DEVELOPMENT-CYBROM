// let frm = document.getElementById('myform')
// frm.body.style.backgroundColor = "red";
   function fun(){
    let name = document.getElementById("name").value;
    let cont = document.getElementById("cont").value;
    localStorage.setItem("contact",cont)
    localStorage.setItem("username",name);
    window.location.href="Submit.html";
return false;
    
    

   }
    