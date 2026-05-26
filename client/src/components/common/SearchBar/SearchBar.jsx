import { FiSearch } from 'react-icons/fi';

function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
}) {

  return (
    <div className="relative">

      <FiSearch
        className="
          absolute
          top-1/2
          left-4
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          pl-12
          pr-4
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

    </div>
  );
}

export default SearchBar;