function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        px-4
        py-3
        rounded-xl
        bg-gray-800
        text-white
        border
        border-gray-700
        focus:outline-none
        focus:border-[#b9ff66]
      "
    />
  );
}

export default Input;