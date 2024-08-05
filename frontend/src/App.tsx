import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signin"
            element={authUser ? <Navigate to="/home" /> : <Signin />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/home" /> : <Signup />}
          />
          <Route
            path="/home"
            element={authUser ? <Home /> : <Navigate to="/signin"/>}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
