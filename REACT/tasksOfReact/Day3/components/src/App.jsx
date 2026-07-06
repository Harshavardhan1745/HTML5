import Navbar from "./componets/Navbar"
import Profilecard from "./componets/Profilecard"

const App = () =>{
  
  return(
    <>
    <Navbar/>
    <div className="heading">
      <h1>This is componets process....</h1>
    </div>
    <div>
      <h2 className="head">This is image</h2>
      <img src="./favicon.svg" alt="" className="image" />
    </div>
    <Profilecard/>
    </>
  )

}

export default App