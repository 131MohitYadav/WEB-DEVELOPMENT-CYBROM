const Event = () => {
function fun(){
    alert("Work Done")
}
    return(

        <>
    <button onClick={fun}>Click</button> 
    <button onDoubleClick={fun}> Double Click</button>
    
    <button onMouseEnter={fun}>Mouse Enter Click</button>
    <button onContextMenu={fun}> Context Click</button>

        </>
    )
}

export default Event;