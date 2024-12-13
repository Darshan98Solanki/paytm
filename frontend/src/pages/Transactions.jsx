import { useEffect, useState } from "react";
import { TopBar } from "../components/TopBar";
import { NoTransactionFound } from "../components/NoTransactionFound";
import Transaction from "../components/Transaction";
import axios from "axios";
import { Loader } from "../components/Loader";
import TransactionCardMobile from "../components/TransactionCardMobile";
import Footer from "../components/Footer";
import TransactionSkeletion from "./TransactionSkeleton";
import TransactionSkeletonMobile from "../components/TransactionSkeletonMobile";
import { NoTransactionFoundMobile } from "../components/NoTransactionFoundMobile";

function Transactions() {
  const [Transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://paytm-inky.vercel.app/api/v1/account/transactions", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* <Loader show={loading} /> */}
      <TopBar />
      <div className="max-w-6xl min-h-screen mx-auto mt-10 px-4">
        <h1 className="text-lg text-center font-bold mb-4 sm:text-xl">
          Transactions
        </h1>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 hidden sm:block">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  User Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Date
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Amount
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {
                (loading)?<TransactionSkeletion count={10}/> : (Transactions.length != 0)?
                  Transactions.map((data) => (
                    <Transaction
                      key={data._id}
                      date={data.timestamp.split("T")[0]}
                      firstname={(data.amount < 0) ? data.ToFirstName : data.FromFirstName}
                      lastname={(data.amount < 0) ? data.ToLastName : data.FromLastName}
                      amount={data.amount}
                      id={(data.amount < 0) ? data.ToUserId : data.FromUserId}
                    />
                  )) : <NoTransactionFound/>
                }
            </tbody>
          </table>
        </div>

        {/* Mobile-Friendly Cards */}
        <div className="sm:hidden">
           {
             (loading)?<TransactionSkeletonMobile count={10}/> : (Transactions.length != 0)?
             Transactions.map((data) => (
               <TransactionCardMobile
                 key={data._id}
                 date={data.timestamp.split("T")[0]}
                 firstname={(data.amount < 0) ? data.ToFirstName : data.FromFirstName}
                 lastname={(data.amount < 0) ? data.ToLastName : data.FromLastName}
                 amount={data.amount}
                 id={(data.amount < 0) ? data.ToUserId : data.FromUserId}
               />
              )):<NoTransactionFoundMobile/>
           }
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Transactions;
