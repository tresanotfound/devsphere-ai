function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {

  return (
    <div className="flex items-center gap-3 mt-6">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          px-4
          py-2
          rounded-lg
          bg-gray-800
          text-white
        "
      >
        Prev
      </button>

      <span className="text-white">
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
          px-4
          py-2
          rounded-lg
          bg-[#b9ff66]
          text-black
        "
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;