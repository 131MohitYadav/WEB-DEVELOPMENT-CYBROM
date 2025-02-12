async function datafetching(){
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let resdata = await data.json()
    
    let fdata = resdata.map((e)=>`
    <tr>
    <td> 101 </td>
    <td> CS</td>
    <td> Hello Mohit</td>
    </tr>
    `).join("")
    document.querySelector('#showdata').innerHTML = fdata
}
datafetching();