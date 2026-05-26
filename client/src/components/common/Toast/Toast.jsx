function Toast({ message, type = 'success' }) {

  return (

    <div
      className={`fixed top-6 right-6 z-[9999]
      px-5 py-4 rounded-2xl shadow-2xl
      text-white font-medium animate-slideIn
      ${
        type === 'success'
          ? 'bg-[#b9ff66] text-black'
          : 'bg-red-500'
      }`}
    >

      {message}

    </div>
  );
}

export default Toast;