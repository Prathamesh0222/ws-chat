import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

const Signup = () => {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex flex-col justify-center">
        <div className="border border-white border-opacity-15 rounded-lg bg-[#18181B] w-[50vh] text-center p-2 h-max px-4">
            <Heading label="Signup" />
            <SubHeading label="Create your account by entering your information below" />
            <InputBox label="Full Name" placeholder="John Doe"/>
            <InputBox label="Email" placeholder="abc@example.com"/>
            <InputBox label="Password" placeholder="123456" type="password"/>
            <InputBox label="Confirm Password" placeholder="123456" type="password"/>
            <Checkbox/>
            <Button label="Sign up" onClick={() => {}}/>
            <Bottom label="Already have an account?" buttonText="Sign in" to={"/signin"} />
        </div>
      </div>
    </div>
  );
};

export default Signup;