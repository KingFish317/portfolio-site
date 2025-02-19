import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProjects } from '@/data/projects'

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I'm John Paul Fallon
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600">
            Mechanical Engineer & Biomechanics Researcher
          </h2>
          <p className="text-lg text-gray-700">
            UW Mechanical Engineering graduate with a passion for optimizing systems
            and solving complex problems through innovative approaches.
          </p>
          <div className="pt-4">
            <Link 
              href="/projects" 
              className="bg-desert-clay hover:bg-desert-earth text-white px-6 py-3 rounded-md transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Placeholder for your profile image */}
          <div className="w-72 h-72 rounded-full bg-desert-sky flex items-center justify-center text-white">
            Profile Image Placeholder
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
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
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span key={index} className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-desert-clay hover:text-desert-earth font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            href="/projects" 
            className="inline-block border-2 border-desert-clay text-desert-clay hover:bg-desert-clay hover:text-white px-6 py-2 rounded-md transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-12 bg-texture-concrete -mx-4 px-4 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Engineering</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Mechanical Design</li>
              <li>Structural Analysis</li>
              <li>Thermal Systems</li>
              <li>Fluid Dynamics</li>
              <li>Material Selection</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Software</h3>
            <ul className="space-y-2 text-gray-700">
              <li>MATLAB</li>
              <li>Python</li>
              <li>CAD Software</li>
              <li>FEA Tools</li>
              <li>Data Analysis</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Soft Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Problem Solving</li>
              <li>Technical Communication</li>
              <li>Team Collaboration</li>
              <li>Project Management</li>
              <li>Research Methodology</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}