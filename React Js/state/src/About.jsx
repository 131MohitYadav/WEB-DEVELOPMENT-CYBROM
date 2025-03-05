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
        <h1>Array = {data[0]} , {data[1]} , {data[3]}</h1>
        </>
    )
}

export default About;