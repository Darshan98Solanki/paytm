import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export function TopBar({username=""}) {

  const navigator = useNavigate()

  return <div className="h-14 py-10 shadow-md shadow-cyan-400/50 flex justify-between">
    <div className="flex font-mono text-3xl lg:text-4xl font-bold flex-col justify-center h-full ml-5 lg:ml-10">
        PAY-DM
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4 text-black font-bold">
            Hello, {username+" 👋"}
        </div>
        <div className="flex flex-col justify-center h-full mr-2">
          <Button lable={"Logout"} onClick={()=>{
            localStorage.removeItem("token")
            navigator("../signin")
          }}/>
        </div>
    </div>
  </div>
}
