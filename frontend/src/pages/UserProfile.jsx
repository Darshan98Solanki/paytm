import { memo, useEffect, useMemo, useState } from "react";
import { TopBar } from "../components/TopBar";
import axios from "axios";
import { Loader } from "../components/Loader";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";

export default function UserProfile() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://paytm-inky.vercel.app/api/v1/user/getUser", {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                setFirstName(response.data.firstname);
                setLastName(response.data.lastname);
                setLoading(false);
            });
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const token = localStorage.getItem("token")
            const response = await axios.put("https://paytm-inky.vercel.app/api/v1/user/updateUser",
                {
                    firstname: firstName,
                    lastname: lastName,
                    ...(password && { password }),
                }
                , {
                    headers: {
                        authorization: token
                    },
                }
            )
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    return (<>
        <TopBar />
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <Loader show={loading} />
            <div className="mx-auto max-w-lg">
                <form
                    onSubmit={handleUpdate}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <Heading lable={"User Profile"} />
                    <SubHeading lable={"Enter your details to update profile"} />
                    <InputField
                        onChange={(e) => {
                            setFirstName(e.target.value.trim());
                        }}
                        lable={"firstname"}
                        placeholder={"Enter your First Name"}
                        value={firstName}
                    />
                    <InputField
                        onChange={(e) => {
                            setLastName(e.target.value.trim());
                        }}
                        lable={"lastname"}
                        placeholder={"Enter your Last Name"}
                        value={lastName}
                    />
                    <InputField
                        onChange={(e) => {
                            setPassword(e.target.value.trim());
                        }}
                        lable={"password"}
                        placeholder={"Enter new password (optional)"}
                        value={password}
                    />
                    <Button onClick={() => { }} lable={"Update Profile"} />
                </form>
            </div>
            <ToastContainer />
        </div>
        <Footer/>
    </>
    );
}
