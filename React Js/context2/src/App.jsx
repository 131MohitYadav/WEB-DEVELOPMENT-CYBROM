
import { createContext } from 'react'
import './App.css'
import Ch1 from './Ch1';
import Ch2 from './Ch2';
import Ch3 from './Ch3';
import Ch4 from './Ch4';


function App() {

 let appdata =  createContext
 let name = "My name is Mohit Yadav";

 

  return (
    <>
    <h1>Hello welcome to context in ReactJs</h1>
    <appdata.Provider value = {name}>
      <Ch1/>
      <Ch2/>
      <Ch3/>
      <Ch3/>
      <Ch4/>
    </appdata.Provider>
    
      
    </>
  )
}

export default App
