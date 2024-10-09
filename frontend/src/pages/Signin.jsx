import { useState } from "react";
import { Button } from "../components/Button";
import { ButtonBelowWarning } from "../components/ButtonBelowWarning";
import { Heading } from "../components/Heading";
import { InputField } from "../components/InputField";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

function Signin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          action="#"
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <Heading lable={"Sign In"} />
          <SubHeading lable={"Enter your details to login"} />
          <InputField
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            lable={"Email"}
            placeholder={"Enter your email"}
          />
          <InputField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            lable={"Password"}
            placeholder={"Enter your password"}
          />
          <Button onClick={
            () => {
              axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
              }).then((response) => {
                localStorage.setItem("token", "Bearer "+response.data.token)
              }).catch((error) => {

              })
            }
          } lable={"Sign In"} />
          <ButtonBelowWarning
            lable={"you don't have account? "}
            linktext={"Sign Up"}
            link={"../signup"}
          />
        </form>
      </div>
    </div>
  );
}

export default Signin;
