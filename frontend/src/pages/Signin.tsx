import Bottom from "../components/Bottom"
import Button from "../components/Button"
import { Heading } from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"

const Signin = () => {
  return (
    <div className="flex h-screen justify-center">
    <div className="flex flex-col justify-center">
      <div className="border border-white border-opacity-15 rounded-lg bg-[#18181B] w-[50vh] text-center p-2 h-max px-4">
          <Heading label="Signin" />
          <SubHeading label="Enter your crendentails" />
          <InputBox label="Username" placeholder="John Doe"/>
          <InputBox label="Password" placeholder="123456" type="password"/>

          <Button label="Sign in" onClick={() => {}}/>
          <Bottom label="Don't have an account?" buttonText="Sign up" to={"/signup"} />
      </div>
    </div>
  </div>
  )
}

export default Signin