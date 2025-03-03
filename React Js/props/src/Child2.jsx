
import Child3 from "./Child3";
function Child2(props){
    // Destructuring
    let {lname} = props
    return(
        <>
    
    <h1>This is child2 {lname}</h1>
    <Child3 age = "22"/>

        </>
    )
    
    
    }
    
    export default Child2;