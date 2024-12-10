import { useNavigate } from "react-router-dom";

export default function TransactionCardMobile({firstname, lastname, amount, id, date}) {

    const navigate = useNavigate()

  return (
    <div className="sm:hidden">
      <div
        className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
      >
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold">User Name:</span> {firstname}{" "}
          {lastname}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Amount:</span> <span className={` ${amount > 0? 'text-green-500': 'text-red-500' }`}>{amount > 0 ? '+'+amount : amount } $</span>
        </p>
        <div className="mt-2">
          <button
            onClick={(e) => {
              navigate(
                "/sendmoney?id=" +
                  id +
                  "&firstname=" +
                  firstname +
                  "&lastname=" +
                  lastname
              );
            }}
            className="bg-gray-800 text-white text-xs md:text-md lg:text-md md:px-6 md:py-4 px-3 py-2 rounded-md hover:bg-gray-700 font-bold focus:outline-none"
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
}
