import { Link } from "react-router-dom";

export function TopBar({username="User"}) {

  return <div className="h-14 py-10 shadow-md shadow-cyan-400/50 flex justify-between">
    <div className="flex font-mono text-3xl lg:text-4xl font-bold flex-col justify-center h-full ml-5 lg:ml-10">
        PAY-DM
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4 text-black font-bold">
            Hello, {username+" 👋"}
        </div>
    </div>
  </div>
}
