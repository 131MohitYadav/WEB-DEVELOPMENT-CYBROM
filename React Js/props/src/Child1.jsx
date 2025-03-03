//import Child2 from "./Child2";

import Child2 from "./Child2";
import Child3 from "./Child3";


function Child1(props){ // ye props yaha pr object bn jata hai
    let {name} =  props
return(
    <>

<h1>This is child1 {name}</h1>
<Child2  lname = "Yadav"/>
<Child3 city = "Gwalior"/>

    </>
)


}

export default Child1;