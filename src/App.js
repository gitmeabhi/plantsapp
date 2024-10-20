
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Thanks from "./components/Thanks"

import Home from "./components/Home"


const App = () => {
 

  return (
    <>
  
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/thanks" element = {<Thanks />}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
  
export default App