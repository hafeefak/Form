

import{Routes,Route} from "react-router-dom"
import Home from './assets/Home'
import Login from './assets/Login'
import Registration from './assets/Registration'
function App() {
 

  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/login" element={<Login/>}/>
          
          <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App
