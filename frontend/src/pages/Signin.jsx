import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { ButtonBelowWarning } from "../components/ButtonBelowWarning";
import { Heading } from "../components/Heading";
import { InputField } from "../components/InputField";
import { SubHeading } from "../components/SubHeading";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigator = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      axios
        .get("https://paytm-inky.vercel.app/api/v1/user/me", {
          headers: {
            authorization: token,
          },
        })
        .then((response) => {
          if (response.data.authorization) {
            navigator("/dashboard");
          }
        });
    } catch (error) {}
  }, []);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      axios
        .post("https://paytm-inky.vercel.app/api/v1/user/signin", {
          username,
          password,
        })
        .then((response) => {
          localStorage.setItem("token", "Bearer " + response.data.token);
          navigator("/Dashboard");
        })
        .catch((error) => {
          toast.error(error.response.data);
        });
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSignIn}
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
          <Button onClick={() => {}} lable={"Sign In"} />
          <ButtonBelowWarning
            lable={"you don't have account? "}
            linktext={"Sign Up"}
            link={"../signup"}
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signin;
