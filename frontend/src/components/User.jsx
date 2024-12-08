import { useNavigate } from "react-router-dom";
import tailwindAvatarColors from "../assets/tailwindAvatarColors";

export function User({ fname, lname, id }) {
  const shortName = fname.charAt(0) + lname.charAt(0);
  const navigate = useNavigate()
  const randomColor = tailwindAvatarColors[Math.floor(Math.random() * tailwindAvatarColors.length)];

  return (
    <tr className="">
      <td className="whitespace-nowrap px-4 md:px-2 py-4 font-medium">
        <div className={`inline-flex items-center justify-center w-12 h-12 text-xl text-white ${randomColor} rounded-full`}>
          {shortName}
        </div>
        <span className="ml-4 font-bold text-sm align-[4px] md:text-lg">
          {fname + " " + lname}
        </span>
      </td>
      <td>
        <div className="float-end mr-2"> 
          <button onClick={ e => {
            navigate("/sendmoney?id="+id+"&firstname="+fname+"&lastname="+lname)
          }} className="bg-gray-800 text-white md:px-6 md:py-4 px-3 py-2 rounded-md hover:bg-gray-700 font-bold focus:outline-none">
            Send Money
          </button>
        </div>
      </td>
    </tr>
  );
}
