const Event = () => {
function fun(){
    alert("Work Done")
}
    return(

        <>

    <button onClick={fun}>Click</button> 
    <br></br><br></br>
    <button onDoubleClick={fun}> Double Click</button>\
    <br></br><br></br>
    
    <button onMouseEnter={fun}>Mouse Enter Click</button>
    <br></br> <br></br>
    <button onContextMenu={fun}> Context Click</button>

        </>
    )
}

export default Event;