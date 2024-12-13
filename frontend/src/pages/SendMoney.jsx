import { Heading } from "../components/Heading";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { Loader } from "../components/Loader";
function SendMoney() {
  const [loading, setLoading] = useState(false)
  const [searchParam] = useSearchParams();
  const [amount, setAmount] = useState();
  const id = searchParam.get("id");
  const fname = searchParam.get("firstname");
  const lname = searchParam.get("lastname");
  const navigator = useNavigate();

  return (
    <div className="w-full content-center mx-auto max-w-screen-sm align-middle px-4 py-16 sm:px-6 lg:px-8">
      <Loader show={loading} />
      <form className="bg-white shadow-md shadow-slate-400 rounded px-8 pt-6 pb-8 mb-4">
        <button
          onClick={() => navigator("../dashboard")}
          className="flex items-center mb-6 md:mb-0 justify-center p-2 bg-red-500 text-white rounded hover:bg-red-600" // Circular button
        >
          <span className="text-xs font-bold">Go Dashboard</span>
        </button>
        <Heading className="" lable="Send Money" />
        <div className="my-6 ">
          <div className="inline-flex font-bold items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full">
            {(fname.charAt(0) + lname.charAt(0)).toUpperCase()}
          </div>
          <label className="ml-5 text-xl font-bold">
            {fname.charAt(0).toUpperCase() +
              fname.slice(1) +
              " " +
              lname.charAt(0).toUpperCase() +
              lname.slice(1)}
          </label>
        </div>
        <div className="my-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Amount to transfer
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="Amount"
            onChange={(e) => {
              const value = e.target.value;
              const decimalIndex = value.indexOf('.');
              if (value.charAt(0) != '0') {
                if (decimalIndex !== -1 && value.length - decimalIndex > 3) {
                  e.target.value = value.slice(0, decimalIndex + 3);
                }
                setAmount(e.target.value);
              } else {
                e.target.value = amount
              }
            }}
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 w-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={async () => {
              setLoading(true)
              try {
                const response = await axios.put("https://paytm-inky.vercel.app/api/v1/account/transfer",
                  {
                    to: id,
                    amount,
                  },
                  {
                    headers: {
                      authorization: localStorage.getItem("token"),
                    },
                  }
                )
                toast.success(response.data.message);
                navigator(`../paymentdone/${amount}`)
              } catch (error) {
                toast.error(error.response.data.message);
              } finally {
                setLoading(false);
              }
            }}
          >
            Send Money
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2024-Darshan Solanki. All rights reserved.
      </p>
      <ToastContainer />
    </div>
  );
}

export default SendMoney;
