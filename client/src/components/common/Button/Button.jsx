function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
}) {

  const variants = {
    primary:
      'bg-[#b9ff66] text-black hover:bg-lime-300',

    secondary:
      'bg-gray-700 text-white hover:bg-gray-600',

    danger:
      'bg-red-500 text-white hover:bg-red-400',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;