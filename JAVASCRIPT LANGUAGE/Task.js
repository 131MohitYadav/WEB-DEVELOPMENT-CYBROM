// print the even number and background color red

let li = document.getElementsByTagName("li")


for(let a = 0; a < 10;a++){
 if ( a % 2 == 1){
    li[a].style.backgroundColor= "aqua";
    li[a].style.fontSize = "30px";
 }
 else{
    console.log("none")
 }
}