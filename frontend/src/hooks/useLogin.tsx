import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Bounce, toast } from "react-toastify";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username: string, password: string) => {
    const success = handleInputErrors({ username, password });
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:3000/api/auth/signin",{
            username,password
        });
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;

type LoginProps = {
  username: string;
  password: string;
};

function handleInputErrors({ username, password }: LoginProps) {
  if (!username || !password) {
    toast.error("Fill the input fields", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return false;
  }
  return true;
}
