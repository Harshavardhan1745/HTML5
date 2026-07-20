import { useState } from "react"

const App = () => {
   
  const [saveData , setsaveData] = useState({username:""})
  
  const [Datas , setDatas ]  = useState([])
  
  const clicktoadd = (e) =>{
       e.preventDefault()
       setDatas([...Datas,saveData])

  }

  return (
    <>
     <form onSubmit={clicktoadd}> 
      <input type="text"  placeholder="Enter your name " onChange={(e)=>setsaveData({username:e.target.value})}/>
      <input type="submit"/>
     </form>
    
    <div>
      <h1>{Datas}</h1>
    </div>
    </>
  )
}

export default App