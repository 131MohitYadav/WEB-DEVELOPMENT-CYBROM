const myJson = `{"name":"Mohit","age":21,"city":"Gwalior"}`;
const myobj = JSON.parse(myJson);
let data = document.getElementById('demo')
data.innerHTML = myobj.name +" " + "Yadav";
data.style.fontSize = "40px";
data.style.color = "red";
data.style.textAlign = "center";