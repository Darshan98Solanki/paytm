export function Button({lable ,onClick}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
    >
      {lable}
    </button>
  );
}
