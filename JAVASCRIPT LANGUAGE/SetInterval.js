// let interval = setInterval = setInterval(()=>{
//     document.write("Hello Mohit ")
// },1000)

var st = 0;
var c = 0;
function start(){

    let cnt = document.getElementById('count')
   st = setInterval(()=>{
    
        cnt.innerHTML = c++;
    },1000)

}
function stop(){
    clearInterval(st);
};

function res(){
    
let cnt = document.getElementById('count')
  c = 0;
  cnt.innerHTML=c;
}