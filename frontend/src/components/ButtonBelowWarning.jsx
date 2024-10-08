import { Link } from "react-router-dom";

export function ButtonBelowWarning({lable, linktext, link}) {
  return (
    <p className="text-center text-sm text-gray-500">
      {lable}
      <Link className="underline" to={link}>
        {linktext}
      </Link>
    </p>
  );
}
