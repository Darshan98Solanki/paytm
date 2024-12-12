export function InputField({lable, placeholder, onChange, value=""}) {
  return (
    <div>
      <label htmlFor="email" className="sr-only">
        {lable}
      </label>

      <div className="relative">
        <input
          type="text"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}
