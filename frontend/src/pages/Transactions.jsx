import { useEffect, useState } from "react";
import { TopBar } from "../components/TopBar";
import Transaction from "../components/Transaction";
import axios from "axios";

function Transactions() {

  const [Transactions, setTransactions] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/transactions", {
      headers:{
        authorization: localStorage.getItem("token")
      }
    }).then(response=>{
      console.log(response)
    })
  })

  return (
    <>
      <TopBar />
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-xl text-center font-bold mb-4">Transactions</h1>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  User Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Amount
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Action
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <Transaction />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Transactions;
