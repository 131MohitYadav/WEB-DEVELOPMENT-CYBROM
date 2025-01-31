

function color(){
    let clr = document.getElementById('clr').value
    document.body.style.backgroundColor=clr;
    return false
}


function fun3(){
    let image1 = document.getElementById('image1')
    image1.src = "gul.jpeg"
    
}


function fun2(){
    let image1 = document.getElementById('image1')
    image1.src = "ras.jpeg"
    
}

function fun1(){
    let image1 = document.getElementById('image1')
    image1.src = "malai.jpeg"
    
}
let count = 0;
let head = document.getElementById('head')

function inc(){
    count = count + 1;
    head.innerHTML = count;
    
    
}

function dec(){
    if ( count > 0){
    count = count - 1;
    head.innerHTML = count;
    
    }
}

function res(){
    count = 0;
    head.innerHTML = count;
    
    
}