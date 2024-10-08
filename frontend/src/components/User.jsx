export function User({ fname, lname }) {
  
    const shortName = fname.charAt(0)+lname.charAt(0)

  return (
    <tr className="">
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full">
          {shortName}
        </div>
        <span className="ml-4 font-bold text-md md:text-lg">
          {fname + " " + lname}
        </span>
      </td>
      <td>
        <div className="flex rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg mr-5">
          <button className="flex-1 font-bold md:text-lg text-xs py-2 px-3 md:px-0 bg-white md:py-3 rounded-xl">
            Send
          </button>
        </div>
      </td>
    </tr>
  );
}
