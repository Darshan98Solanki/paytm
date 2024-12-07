import { useNavigate } from "react-router-dom";

export default function Transaction({ firstname, lastname, date, amount, id }) {
  const shortName = firstname.charAt(0) + lastname.charAt(0);
  const navigate = useNavigate();
  return (
    <>
      <tr className="hidden sm:block">
        <td className="whitespace-nowrap px-4 md:px-2 py-4 font-medium">
          <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full">
            {shortName}
          </div>
          <span className="ml-4 font-bold text-sm align-[4px] md:text-md">
            {firstname + " " + lastname}
          </span>
        </td>
        <td>
          <span className="ml-4 font-bold text-sm align-[4px] md:text-md">
            {date}
          </span>
        </td>
        <td>
          <span className="ml-4 font-bold text-sm align-[4px] md:text-md">
            $ {amount}
          </span>
        </td>
        <td>
          <div className="mr-2">
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
              Send Again
            </button>
          </div>
        </td>
      </tr>
      <tr className="sm:hidden">
        <td colSpan={4}
          className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <p className="text-sm font-medium text-gray-700">
            <span className="font-semibold">User Name:</span> {firstname}{" "}
            {lastname}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Date:</span>{" "}
            {date}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Amount:</span> {amount}
          </p>
          <div className="mt-2">
            <button
              onClick={() => handleAction(id)}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Action
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
