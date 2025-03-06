import { useState } from "react"
import './App.css'


function Hide(){
    let[visible,setVisible] = useState(false)
   
function show(){

    if(visible){
        setVisible(false)
    }
    else{
        setVisible(true)
    }
}
    return(
        <>
        <div className="hideandshow">
  <button onClick={show}>
        {visible ? "Hide" : "Show"}
      </button>

      {visible ? <p>This is visible content.</p> : null}
      </div>
        </>
    )
}

export default Hide;