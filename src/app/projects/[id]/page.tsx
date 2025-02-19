import Link from 'next/link';
import { getProjectBySlug, projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectBySlug(params.id);
  
  if (!project) {
    notFound();
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Challenges</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Outcomes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {project.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-texture-sand p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Interested in similar projects?</h2>
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