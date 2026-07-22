import { useState } from "react"

const App = () => {
  const [adddata,setAddData] = useState("")
  const [data,setData] = useState([])

  const adddatas = (e) => {
    setAddData(e.target.value)
  }

  const showaddvalue =()=>{
    setData(adddata)
    setAddData("")
  }

  
  return (
    <>
    <div>
      <input type="text" value={adddata} placeholder="Enter your name" onChange={adddatas}/>
      <button className="" onClick={showaddvalue}>Show value</button>
      <h1>{data}</h1>
    </div>
   
   <div>
    <input type="text" placeholder="Enter your name " onChange={addstudentname}/>
    <input type="text" placeholder="Enter your course " onChange={addstudentcourse}/>
    <button></button>
   </div>
    </>
  )
}

export default App