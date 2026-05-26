function Card({ children, className = '' }) {
  return (
    <div
      className={`
        bg-gray-900
        rounded-2xl
        p-6
        shadow-lg
        border
        border-gray-800
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;