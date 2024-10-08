import { Balance } from "../components/Balance"
import { TopBar } from "../components/TopBar"
import { Users } from "../components/Users"

function Dashboard(){
    return <>
        <TopBar username={"Darshan"}/>
        <div className="m-8">
            <Balance balance={"10,000"}/>
        </div>
        <br/>
        <div className="">
            <Users/>
        </div>
    </>
}

export default Dashboard