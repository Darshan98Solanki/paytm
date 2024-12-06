import { useEffect, useState } from "react";
import { Balance } from "../components/Balance";
import { TopBar } from "../components/TopBar";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";

function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState();
  const navigator = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");

      if (!token || token == "") {
        navigator("../signin")
      } else {
        axios
          .get("https://paytm-inky.vercel.app/api/v1/user/me", {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }).catch(error => {
            if(!error.response.data.authorization){
                navigator("../signin")
            }
          });
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await axios.get("https://paytm-inky.vercel.app/api/v1/account/balance", {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          })
          setBalance(response.data.balance);
      } catch (error) {
  
      }finally{
        setLoading(false);
      }
    }
    fetchData()
  }, [balance]);

  return (
    <>
      <Loader show={loading} />
      <TopBar/>
      <div className="m-8">
        <Balance balance={balance} />
      </div>
      <br />
      <div className="">
        <Users />
      </div>
    </>
  );
}

export default Dashboard;
