import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { ButtonBelowWarning } from "../components/ButtonBelowWarning";
import { Heading } from "../components/Heading";
import { InputField } from "../components/InputField";
import { SubHeading } from "../components/SubHeading";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigator = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/v1/user/me", {
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

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:3000/api/v1/user/signup", {
          username,
          firstname,
          lastname,
          password,
        })
        .then((response) => {
          toast.success("User created successfully");
        })
        .catch((error) => {
          toast.error(error.response.data);
        });
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form
            onSubmit={handleSignUp}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <Heading lable={"Sign Up"} />
            <SubHeading lable={"Enter your details to create account"} />
            <InputField
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              lable={"First name"}
              placeholder={"Enter your first name"}
            />

            <InputField
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              lable={"Last name"}
              placeholder={"Enter your last name"}
            />

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

            <Button onClick={(e) => {}} lable={"Sign Up"} />

            <ButtonBelowWarning
              lable={"Already have an account? "}
              linktext={"Sign In"}
              link={"../signin"}
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;
