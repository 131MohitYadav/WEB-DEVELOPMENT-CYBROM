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