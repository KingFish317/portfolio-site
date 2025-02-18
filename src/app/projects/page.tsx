import Link from 'next/link';

// Sample project data - you'll replace this with your actual projects
const projects = [
  {
    id: 'biomechanics',
    title: 'Biomechanics Research',
    description: 'Analysis of joint mechanics using MATLAB and motion capture data.',
    tags: ['MATLAB', 'Research', 'Data Analysis'],
    imageColor: 'bg-desert-clay',
  },
  {
    id: 'optimization',
    title: 'System Optimization',
    description: 'Improved efficiency in mechanical systems through innovative design modifications.',
    tags: ['CAD Design', 'Optimization', 'Engineering'],
    imageColor: 'bg-desert-sage',
  },
  {
    id: 'thermal-analysis',
    title: 'Thermal System Analysis',
    description: 'Modeled and analyzed heat transfer in complex mechanical systems.',
    tags: ['Thermal Analysis', 'Simulation', 'MATLAB'],
    imageColor: 'bg-desert-sky',
  },
  {
    id: 'fluid-dynamics',
    title: 'Fluid Dynamics Project',
    description: 'CFD analysis of fluid flow through custom-designed components.',
    tags: ['Fluid Dynamics', 'CFD', 'Simulation'],
    imageColor: 'bg-desert-earth',
  },
  {
    id: 'material-testing',
    title: 'Material Testing Framework',
    description: 'Developed testing protocols for evaluating material properties under various conditions.',
    tags: ['Materials Science', 'Testing', 'Data Collection'],
    imageColor: 'bg-desert-clay',
  },
  {
    id: 'automation',
    title: 'Lab Automation Tools',
    description: 'Created software tools to automate repetitive laboratory testing procedures.',
    tags: ['Python', 'Automation', 'Laboratory'],
    imageColor: 'bg-desert-sage',
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold text-desert-earth mb-4">My Projects</h1>
        <p className="text-lg text-gray-700 mb-8">
          A collection of my engineering projects, research work, and technical explorations.
          Each project demonstrates different aspects of my skills and interests.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className={`h-48 ${project.imageColor} flex items-center justify-center text-white`}>
                Project Image Placeholder
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-desert-earth">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projects/${project.id}`}
                  className="text-desert-clay hover:text-desert-earth font-medium"
                >
                  View details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}