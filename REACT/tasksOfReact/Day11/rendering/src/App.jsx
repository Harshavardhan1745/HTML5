import { useState } from "react"

const App = () => {
  
  const [data,setData] = useState(true)

  const [arr,setArr] = useState([1,2,3,4,5,6])
  

  const [obj,setObj] = useState({name:'React'})

  const changename = () => {
    setObj({...obj,name : "Node"})
  }
  
  const addnum = () =>{
    setArr([...arr,100])
  }

  const clicktochange = () =>{
    setData(!data)
  }
  
  return (
    <>
      <div className={data?"bg-black text-white p-10":"bg-red-500 text-white p-10 "}>
        <h1>Welcome to React </h1>
        <button className={data?"bg-red-500 p-2 rounded ":"bg-black p-2 rounded "} onClick={clicktochange}>change</button>
      </div>

      <div className="bg-blue-400 p-5 m-5 text-white rounded">
        {arr.map((e,i)=>(
          <h1 key={i+1}>{e}</h1>
        ))}

        <div className="p-2">
          <button className="bg-black p-2 text-white w-40 rounded" onClick={addnum}>Add</button>
        </div>
      </div>

      <div className="bg-blue-300 p-2 text-white m-5 rounded">
        <h1 className="font-bold text-2xl">{obj.name}</h1>
        <button className="bg-black p-2 text-white w-40 rounded" onClick={changename}>change</button>
      </div>
    </>
  )
}

export default App