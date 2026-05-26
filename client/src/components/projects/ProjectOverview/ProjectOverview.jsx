import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectOverview() {

  const projects = [
    {
      title: 'DevSphere AI',
      description:
        'AI-powered productivity platform.',
      status: 'Active',
    },

    {
      title: 'HostelRadar',
      description:
        'Smart hostel management platform.',
      status: 'In Progress',
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      "
    >

      {projects.map((project, index) => (

        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          status={project.status}
        />

      ))}

    </div>
  );
}

export default ProjectOverview;