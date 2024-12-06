export default function Transaction({firstname, lastname, amount, id}) {
  return (
    <tr className="">
      <td className="whitespace-nowrap px-4 md:px-2 py-4 font-medium">
        <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full">
          {/* {shortName} */}DS
        </div>  
        <span className="ml-4 font-bold text-sm align-[4px] md:text-lg">
          {firstname + " " + lastname}
        </span>
      </td>
      <td>
      <span className="ml-4 font-bold text-sm align-[4px] md:text-lg">
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
  );
}
