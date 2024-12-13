import { useState, useEffect } from "react";
import Dropdown from "./Dropdown"
import axios from "axios";
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export function TopBar() {

  const navigate = useNavigate()

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");

      if (!token || token == "") {
        navigate("../signin")
      } else {
        axios
          .get("https://paytm-inky.vercel.app/api/v1/user/me", {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }).catch(error => {
            if (!error.response.data.authorization) {
              navigator("../signin")
            }
          });
      }
    } catch (error) { }
  }, []);

  const [username, setUserName] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://paytm-inky.vercel.app/api/v1/user/getUserName", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setUserName(response.data.username);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return <div className="h-14 py-10 shadow-md shadow-cyan-400/50 flex justify-between">
    <div className="flex font-mono text-xl lg:text-4xl font-bold flex-col justify-center h-full ml-5 lg:ml-10" onClick={() => {
      navigate("../home")
    }}>
      PAY-DM
    </div>
    <div className="flex">
      <div className="flex flex-col justify-center h-full mr-2">
        {(username)?<Dropdown username={username + " 👋"} /> : <Skeleton className='animate-pulse' inline={true} width="13rem" height="2.5rem" /> }
      </div>
    </div>
  </div>
}
