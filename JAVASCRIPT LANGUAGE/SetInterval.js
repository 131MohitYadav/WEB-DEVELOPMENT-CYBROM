// let interval = setInterval = setInterval(()=>{
//     document.write("Hello Mohit ")
// },1000)

var st = 0;
function start(){
    var c = 0;
    let cnt = document.getElementById('count')
   st = setInterval(()=>{
    
        cnt.innerHTML = c++;
    },1000)

}
function stop(){
    clearInterval(st);
};