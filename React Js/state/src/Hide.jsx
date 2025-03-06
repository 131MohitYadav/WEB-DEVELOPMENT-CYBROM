import { useState } from "react"



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
  <button onClick={show}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible ? <p>This is visible content.</p> : null}
        </>
    )
}

export default Hide;