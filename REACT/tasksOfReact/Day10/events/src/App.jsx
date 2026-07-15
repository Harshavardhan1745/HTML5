import { useState } from "react"

const App = () => {
   
   const [count,setCount] = useState(0)
   
  const clickbutton =() =>{
    
    setCount(count+1)
    
  }
  return (
    <>
    <div className="p-10">
      <button className="bg-blue-500 p-2 rounded " onClick={clickbutton}>Click me</button>
      <p>{count}</p>
    </div>
    </>
  )
}

export default App