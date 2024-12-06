import { useState, useEffect } from "react";
import Dropdown from "./Dropdown"
import axios from "axios";
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";

export function TopBar() {

  const [username,setUserName] = useState()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://paytm-inky.vercel.app/api/v1/user/getUserName", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setUserName(response.data.username);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return <div className="h-14 py-10 shadow-md shadow-cyan-400/50 flex justify-between">
    <div className="flex font-mono text-xl lg:text-4xl font-bold flex-col justify-center h-full ml-5 lg:ml-10" onClick={()=>{
      navigate("../dashboard")
    }}>
        PAY-DM
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-2">
          <Dropdown username={username+" 👋"}/>
        </div>
    </div>
    <Loader show={loading}/>
  </div>  
}
