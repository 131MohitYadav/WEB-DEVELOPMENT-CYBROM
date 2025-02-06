let ob1 = {};
function fun(){

     ob1 = {
        
        nam : document.getElementById('name').value,
        age : document.getElementById('age').value,
        email : document.getElementById('email').value,
        pass : document.getElementById('pass').value,
        cont : document.getElementById('cont').value
        
        
       
    };
        
    alert("form submit successfully")
    return false;

}


function display(){
    console.log(ob1);
    console.log(ob1.nam , "\n" , ob1.age , "\n", ob1.email , "\n" , ob1.pass , "\n" , ob1.cont);
    
}

    
    
