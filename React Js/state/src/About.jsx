import { useState } from "react"

function About() {
    let [ar,setAr] = useState({
        name:"Mohit",
        contact:1234,
    })

    let [data,setData] = useState(
    ["Mohit","Yadav",4,"Gwalior"]
    )

    
    
    return(
        <>
        <h1>About {ar.name}{ar.contact}</h1>
        <h1>Array = FirstName: {data[0]} , LastName: {data[1]} , City: {data[3]}</h1>
        <button onClick={()=>setData([data[0]="Rohit" , data[1]="Kumar" , data[3]=6])}>click for change</button>
        </>
    )
}

export default About;