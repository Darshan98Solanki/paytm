import { useEffect, useState } from "react";
import { Balance } from "../components/Balance";
import { TopBar } from "../components/TopBar";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [username, setUserName] = useState();
  const [balance, setBalance] = useState();
  const navigator = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");

      if (!token || token == "") {
        navigator("../signin")
      } else {
        axios
          .get("http://localhost:3000/api/v1/user/me", {
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
    try {
      axios
        .get("http://localhost:3000/api/v1/user/getUserName", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setUserName(response.data.username);
        });
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setBalance(response.data.balance);
        });
    } catch (error) {}
  }, [balance]);

  return (
    <>
      <TopBar username={username} />
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
