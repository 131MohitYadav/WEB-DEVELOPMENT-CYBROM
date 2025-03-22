import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let senddata = createContext()

//let name = "Global Data"
let emp = {
  name : "Mohit",
  age : 21,
  city : "Gwalior",
}

let emp1 = {
  name : "Manish",
  age : 22,
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <senddata.Provider value={[emp, emp1]}  >
    <App />
    </senddata.Provider>
  </StrictMode>,

)

export {senddata}