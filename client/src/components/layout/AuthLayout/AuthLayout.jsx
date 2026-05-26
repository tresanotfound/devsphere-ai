function AuthLayout({ children }) {

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#111827]
        p-6
      "
    >

      <div
        className="
          w-full
          max-w-md
          bg-gray-900
          rounded-3xl
          p-10
          border
          border-gray-800
        "
      >
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;