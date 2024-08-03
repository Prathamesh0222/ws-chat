import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
function App() {
 
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
