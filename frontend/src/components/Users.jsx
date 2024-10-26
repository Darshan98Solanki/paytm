import { User } from "./User";
import { useEffect, useState } from "react"
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { NoUserFound } from "./NoUserFound";

export function Users() {

  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(()=>{
    axios.get("https://paytm-inky.vercel.app/api/v1/user/getusers?filter="+filter,{ 
      headers:{
        authorization: localStorage.getItem("token")
      }
    }).then(
      response => {
        setUsers(response.data.users)
      })
  },[filter])

  return (
    <div className="flex flex-col w-full">
      <SearchBar onChange={ e =>{
        setFilter(e.target.value)
      }}/>
      <div className="overflow-x-hidden sm:-mx-6 lg:-mx-0">
        <div className="inline-block min-w-full py-2 sm:px-10 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light mt-10">
              <tbody>
                {
                  users.length === 0 && filter.length !== 0 ? <NoUserFound /> : users.map(user => <User key={user._id} id={user._id} fname={user.firstname} lname={user.lastname}/>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
