import Card from '../../common/Card/Card';

function RecentProjects() {

  const projects = [
    'DevSphere AI',
    'HostelRadar',
    'AI Notes Generator',
  ];

  return (
    <Card>

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        Recent Projects
      </h2>

      <div className="space-y-4">

        {projects.map((project, index) => (

          <div
            key={index}
            className="
              p-4
              rounded-xl
              bg-gray-800
              text-white
            "
          >
            {project}
          </div>

        ))}

      </div>

    </Card>
  );
}

export default RecentProjects;