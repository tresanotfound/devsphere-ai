function Dropdown({
  options = [],
  value,
  onChange,
}) {
  return (
    <select
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
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;