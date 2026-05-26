import Badge from '../../common/Badge/Badge';

function TaskCard({
  title,
  description,
  status,
}) {

  return (
    <div
      className="
        bg-gray-900
        p-5
        rounded-2xl
        border
        border-gray-800
      "
    >

      <div className="flex justify-between items-start">

        <h3
          className="
            text-xl
            font-bold
            text-white
          "
        >
          {title}
        </h3>

        <Badge text={status} />

      </div>

      <p className="text-gray-400 mt-4">
        {description}
      </p>

    </div>
  );
}

export default TaskCard;