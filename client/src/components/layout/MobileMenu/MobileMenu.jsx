function MobileMenu({ isOpen }) {

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        z-50
        md:hidden
      "
    >

      <div
        className="
          w-72
          h-full
          bg-gray-900
          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            text-[#b9ff66]
            mb-10
          "
        >
          Menu
        </h2>

      </div>

    </div>
  );
}

export default MobileMenu;