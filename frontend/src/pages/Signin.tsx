import { useState } from "react"
import Bottom from "../components/Bottom"
import Button from "../components/Button"
import { Heading } from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import useLogin from "../hooks/useLogin"

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,login} = useLogin();

  const handleSubmit = async(e:any) =>{
    e.preventDefault();
    await login(username,password);
  }

  return (
    <div className="flex h-screen justify-center">
    <div className="flex flex-col justify-center">
      <div className="border border-white border-opacity-15 rounded-lg bg-[#18181B] w-[50vh] text-center p-2 h-max px-4">
          <Heading label="Signin" />
          <SubHeading label="Enter your crendentails" />
          <InputBox value={username} onChange={(e)=>{
            setUsername(e.target.value)
          }} label="Username" placeholder="John Doe"/>
          <InputBox value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} label="Password" placeholder="123456" type="password"/>

          <Button
          disabled={loading}
          onClick={handleSubmit}
          className="mt-5"
           label={loading ? <span className="loading loading-spinner"></span> : "Sign in"
            }/>
          <Bottom label="Don't have an account?" buttonText="Sign up" to={"/signup"} />
      </div>
    </div>
  </div>
  )
}

export default Signin