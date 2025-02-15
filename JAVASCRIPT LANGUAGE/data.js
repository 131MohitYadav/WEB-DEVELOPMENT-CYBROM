async function fetchdata (){
    let data = await fetch('http://localhost:5500/student')
    let fdata = await data.json();
    let tdata = fdata.map((e)=>`
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.age}</id>
    <td>${e.contact}</td>
    <td>${e.city}</td>
    </tr>
    `
    ).json("")
    document.getElementById('display').innerHTML = tdata;
}
fetchdata();

function mydel(id){
    fetch(`http://localhost:5500/student/${id}`,{
        method:'DELETE'
        })
    .then(r=>alert("Delete successfuly....!!!!"))

}

function insertdata(){
    let frmdata = {
        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value,
    }
    fetch('http://localhost:3000/student',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
    .then(r=>alert("data inserted....!!!!"))
}
