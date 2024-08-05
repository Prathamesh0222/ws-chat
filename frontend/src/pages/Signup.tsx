import { useState } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, gender: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex h-screen justify-center">
      <div className="flex flex-col justify-center">
        <div className="border border-white border-opacity-15 rounded-lg bg-[#18181B] w-[50vh] text-center p-2 h-max px-4">
          <Heading label="Signup" />
          <SubHeading label="Create your account by entering your information below" />
          <InputBox
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            label="Full Name"
            placeholder="John Doe"
          />
          <InputBox
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            label="Username"
            placeholder="John12"
          />
          <InputBox
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            label="Password"
            placeholder="123456"
            type="password"
          />
          <InputBox
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
            label="Confirm Password"
            placeholder="123456"
            type="password"
          />
          <div className="flex justify-center p-2">
            <Checkbox
              label="Male"
              value="male"
              checked={inputs.gender === "male"}
              onChange={handleCheckboxChange}
            />
            <Checkbox
              label="Female"
              value="female"
              checked={inputs.gender === "female"}
              onChange={handleCheckboxChange}
            />
          </div>
          <Button
          className="mb-2"
           disabled={loading} label={loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign up"
            )} onClick={handleSubmit}/>
          <Bottom
            label="Already have an account?"
            buttonText="Sign in"
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
