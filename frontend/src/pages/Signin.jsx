import { Button } from "../components/Button";
import { ButtonBelowWarning } from "../components/ButtonBelowWarning";
import { Heading } from "../components/Heading";
import { InputField } from "../components/InputField";
import { SubHeading } from "../components/SubHeading";

function Signin() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          action="#"
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <Heading lable={"Sign In"} />
          <SubHeading lable={"Enter your details to login"} />
          <InputField lable={"Email"} placeholder={"Enter your email"} />
          <InputField lable={"Password"} placeholder={"Enter your password"} />
          <Button lable={"Sign In"} />
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
