function NotesCard({
  title,
  description,
}) {

  return (
    <div
      className="
        bg-gray-900
        rounded-2xl
        border
        border-gray-800
        p-5
      "
    >

      <h3
        className="
          text-xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      <p className="text-gray-400 mt-4">
        {description}
      </p>

    </div>
  );
}

export default NotesCard;