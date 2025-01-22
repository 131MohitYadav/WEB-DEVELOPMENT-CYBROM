function color(){
    let cont = document.getElementsByClassName('container')
    console.log(cont);
    cont[0].classList.toggle('colorr')
}


// querySelector
// querySelector all

// let b = document.querySelector('.container')
// b.style.color = "blue"

let c = document.querySelectorAll('.container')
console.log(c);
c[1].style.color = "blue"

let head2 = document.querySelector('h2')
head2.style.color="red"

let btn = document.querySelector('#btn')
btn.addEventListener('click' , function(){
    alert("Add event fire")
})