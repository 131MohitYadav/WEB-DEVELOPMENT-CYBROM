
import { createContext  } from 'react'
import './App.css'
import Ch1 from './Ch1';
import Ch2 from './Ch2';
import Ch3 from './Ch3';
import Ch4 from './Ch4';

let appdata =  createContext()
let name = "My name is Mohit Yadav";

function App() {



 

  return (
    <>
    <h1>Hello welcome to context in ReactJs</h1>
    <appdata.Provider value = {name}>
      <Ch1/>
      
    </appdata.Provider>
    
      
    </>
  )
}

export default App
export {appdata}
