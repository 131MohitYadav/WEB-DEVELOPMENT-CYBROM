import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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

let emp2 = {
  name : "Vikash",
  age : 23,
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <senddata.Provider value={[emp, emp1 , emp2]}  >
    <App />
    </senddata.Provider>
  </StrictMode>,

)

export { senddata }
