import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DropDown({ username }) {
  const [isopen, setOpen] = useState(false);

  const toggleDown = () => {
    setOpen((prev) => !prev);
  };

  const navigator = useNavigate();

  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <span className="border-e px-4 py-3 text-sm/none bg-cyan-700 text-white font-bold">
          Hello, {username}
        </span>

        <button
          className="h-full p-3 bg-cyan-700 hover:bg-cyan-800 text-white"
          onClick={toggleDown}
        >
          <span className="sr-only">m</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isopen && (
        <div
          className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <div className="p-2">
            <a
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              View Profile
            </a>
            <a
              onClick={() => {
                navigator("../transactions");
              }}
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              View Transactions
            </a>

            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
              role="menuitem"
              onClick={() => {
                localStorage.removeItem("token");
                navigator("../signin");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
