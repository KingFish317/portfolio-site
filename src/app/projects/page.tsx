import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
        <p className="text-lg text-gray-700 mb-8">
          A collection of my engineering projects, research work, and technical explorations.
          Each project demonstrates different aspects of my skills and interests.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className={`h-48 ${project.imageColor} flex items-center justify-center text-white`}>
                Project Image Placeholder
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projects/${project.slug}`}
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