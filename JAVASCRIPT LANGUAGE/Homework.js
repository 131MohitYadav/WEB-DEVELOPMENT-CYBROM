
function display(){
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