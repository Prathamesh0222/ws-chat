import { useState } from "react"
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

interface SignupProps {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: string;
}

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async({fullName,username,password,confirmPassword,gender}:SignupProps)=>{
        const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
        if(!success){
             return;
        }
        setLoading(true);
        try{
            const {data} = await axios.post("http://localhost:3000/api/auth/signup",{
               fullName,username,password,confirmPassword,gender
            })
            console.log(data);

            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);

        }catch(error){
            if (axios.isAxiosError(error)) {
                console.error("Axios error:", error.response?.data || error.message);
            } else {
                console.error("Unexpected error:", error);
              }
        }finally{
            setLoading(false);
        }
    }
    return {loading,signup};
}

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword,gender}:SignupProps){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('Fill the input fields', {
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

    if(password !== confirmPassword){
        toast.error('Password do not match', {
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

    if(password.length < 6){
        toast.error('Password must be atleast 6 characters', {
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