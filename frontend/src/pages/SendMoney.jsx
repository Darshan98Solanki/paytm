import { Heading } from "../components/Heading";

function SendMoney({shortName="DS"}) {
  return (
    <div className="w-full content-center mx-auto max-w-screen-sm align-middle px-4 py-16 sm:px-6 lg:px-8">
      <form className="bg-white shadow-md shadow-slate-400 rounded px-8 pt-6 pb-8 mb-4">
        <Heading lable="Send Money" />
        <div className="my-6 ">
          <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full">
            {shortName}
          </div>
          <label className="ml-5 text-xl font-bold">Darshan Solanki</label>
        </div>
        <div className="my-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Amount to transfer
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="Amount"
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 w-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Money
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2024-Darshan Solanki. All rights reserved.
      </p>
    </div>
  );
}

export default SendMoney;
