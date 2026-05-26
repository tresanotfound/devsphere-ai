import Badge from '../../common/Badge/Badge';

function ProjectCard({
  title,
  description,
  status,
}) {

  return (
    <div
      className="
        bg-gray-900
        p-6
        rounded-2xl
        border
        border-gray-800
      "
    >

      <div className="flex justify-between items-start">

        <h2
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          {title}
        </h2>

        <Badge text={status} />

      </div>

      <p className="text-gray-400 mt-4">
        {description}
      </p>

    </div>
  );
}

export default ProjectCard;