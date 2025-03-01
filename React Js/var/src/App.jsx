import Event from './Event.jsx'
//import './App.css'

function App() {
  //let name = prompt("Enter your name")
  let name = "Mohit"
  let emp ={
    FirstName :"Mohit",
    LastName : "Yadav",
    Job : "Senior Developer",
    Salary : 40000
  }

  let arr = [12,"Mohit","Yadav","Manish","Vikash"];

  return (
    <>
     <h1>Welcome {name}</h1>
     <h1>My First Name is : {emp.FirstName}  {emp.LastName}</h1>
     <h1>Job Type is : {emp.Job}</h1>
     <h1>Salary : {emp.Salary}</h1>
     <h1>ID IS : {arr[0]}</h1>
     <h1>NAME IS : {arr[1]}</h1>
     <h1>LASTNAME IS : {arr[2]}</h1>
     <h1>NAME IS : {arr[3]}</h1>
     <Event/>
    </>
  )
}

export default App
