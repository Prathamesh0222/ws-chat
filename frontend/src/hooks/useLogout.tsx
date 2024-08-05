import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";


const useLogout = () => {
  const [loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const logout = async() => {
    setLoading(true);
    try {
        const res = await axios.post("http://localhost:3000/api/auth/logout",)
        const data = res.data;
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem("chat-user");
        setAuthUser(null);
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
  }
  return {loading,logout};
}

export default useLogout