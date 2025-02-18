import Link from 'next/link';

// This is just sample data - you'll replace this with your actual projects
const projectsData = {
  'biomechanics': {
    title: 'Biomechanics Research',
    description: 'Analysis of joint mechanics using MATLAB and motion capture data.',
    fullDescription: 'This project involved analyzing human joint mechanics during various movement patterns. Using motion capture technology, I collected kinematic data and developed MATLAB algorithms to process and visualize the results. The research focused on understanding how different movement strategies impact joint loading and potential injury risk factors.',
    technologies: ['MATLAB', 'Motion Capture', 'Signal Processing', 'Biomechanics'],
    challenges: [
      'Filtering noisy sensor data while preserving important movement characteristics',
      'Developing robust algorithms that work across different subjects and movement patterns',
      'Creating intuitive visualizations of complex 3D movement data'
    ],
    outcomes: [
      'Identified key movement patterns associated with increased joint loading',
      'Developed reusable MATLAB libraries for biomechanical analysis',
      'Created an automated reporting system for quick data interpretation'
    ],
    imageColor: 'bg-desert-clay',
  },
  'optimization': {
    title: 'System Optimization',
    description: 'Improved efficiency in mechanical systems through innovative design modifications.',
    fullDescription: 'This project focused on optimizing the efficiency of a mechanical system by redesigning key components and implementing innovative control strategies. Through careful analysis and iterative testing, I was able to significantly improve performance while reducing energy consumption.',
    technologies: ['CAD Design', 'Simulation', 'Prototyping', 'Testing'],
    challenges: [
      'Balancing performance improvements with manufacturing constraints',
      'Optimizing multiple competing variables simultaneously',
      'Ensuring reliability while pushing efficiency boundaries'
    ],
    outcomes: [
      'Achieved 23% improvement in system efficiency',
      'Reduced manufacturing costs by simplifying component design',
      'Implemented new control algorithm that adapts to operating conditions'
    ],
    imageColor: 'bg-desert-sage',
  },
  // Add more projects as needed
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projectsData[id as keyof typeof projectsData];
  
  // Handle case where project doesn't exist
  if (!project) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-desert-earth mb-4">Project Not Found</h1>
        <p className="mb-6">Sorry, the project you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/projects"
          className="bg-desert-clay hover:bg-desert-earth text-white px-6 py-3 rounded-md transition-colors"
        >
          Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Project Hero */}
      <section>
        <Link 
          href="/projects"
          className="inline-block mb-6 text-desert-sky hover:text-desert-clay transition-colors"
        >
          ← Back to all projects
        </Link>
        <div className={`h-64 md:h-96 ${project.imageColor} rounded-lg flex items-center justify-center text-white text-xl mb-8`}>
          {project.title} - Project Image Placeholder
        </div>
        <h1 className="text-4xl font-bold text-desert-earth mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Project Details */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-desert-clay mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-desert-clay mb-4">Challenges</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-desert-clay mb-4">Outcomes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {project.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-desert-sky/10 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-desert-earth mb-4">Interested in similar projects?</h2>
        <p className="text-gray-700 mb-6">
          If you're interested in learning more about this project or discussing similar work,
          I'd be happy to connect. Feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/about#contact"
            className="bg-desert-clay hover:bg-desert-earth text-white px-6 py-3 rounded-md transition-colors"
          >
            Contact Me
          </Link>
          <Link 
            href="/projects"
            className="border-2 border-desert-clay text-desert-clay hover:bg-desert-clay hover:text-white px-6 py-3 rounded-md transition-colors"
          >
            View More Projects
          </Link>
        </div>
      </section>
    </div>
  );
}