import Link from 'next/link';

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="md:w-1/3">
          {/* Profile image placeholder */}
          <div className="w-64 h-64 rounded-full bg-desert-sky flex items-center justify-center text-white mx-auto">
            Profile Image Placeholder
          </div>
        </div>
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold text-desert-earth">About Me</h1>
          <div className="space-y-4 text-gray-700">
            <p>
              I'm John Paul Fallon, a Mechanical Engineering graduate from the University of Washington (Spring 2023). 
              Currently, I'm applying my technical knowledge in a biomechanics research laboratory, where I blend 
              engineering principles with biological systems.
            </p>
            <p>
              With a strong foundation in MATLAB and a growing expertise in Python, I approach problems 
              with both analytical rigor and creative thinking. I've often been told that I bring more 
              creativity and expression to engineering challenges than is typical in the field.
            </p>
            <p>
              What drives me is the opportunity to optimize and improve systems - finding elegant solutions 
              to complex problems through innovative approaches and clear thinking.
            </p>
          </div>
          <div className="pt-4">
            <Link 
              href="/files/john_paul_fallon_resume.pdf" 
              className="bg-desert-clay hover:bg-desert-earth text-white px-6 py-3 rounded-md transition-colors inline-block"
              target="_blank"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-desert-earth">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-desert-clay">University of Washington</h3>
            <span className="text-gray-600">2019 - 2023</span>
          </div>
          <p className="text-lg font-medium mb-2">Bachelor of Science in Mechanical Engineering</p>
          <div className="text-gray-700 space-y-2">
            <p>Relevant coursework:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mechanical Design</li>
              <li>Thermodynamics</li>
              <li>Fluid Mechanics</li>
              <li>Structural Analysis</li>
              <li>Control Systems</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Skills */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-desert-earth">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-desert-clay">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Programming & Software</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full">MATLAB</span>
                  <span className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full">Python</span>
                  <span className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full">CAD</span>
                  <span className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full">FEA</span>
                  <span className="bg-desert-sky/20 text-desert-sky px-3 py-1 rounded-full">Data Analysis</span>
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Engineering Disciplines</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-desert-sage/20 text-desert-sage px-3 py-1 rounded-full">Mechanical Design</span>
                  <span className="bg-desert-sage/20 text-desert-sage px-3 py-1 rounded-full">Thermal Systems</span>
                  <span className="bg-desert-sage/20 text-desert-sage px-3 py-1 rounded-full">Fluid Dynamics</span>
                  <span className="bg-desert-sage/20 text-desert-sage px-3 py-1 rounded-full">Biomechanics</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-desert-clay">Soft Skills</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Communication</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-desert-clay/20 text-desert-clay px-3 py-1 rounded-full">Technical Writing</span>
                  <span className="bg-desert-clay/20 text-desert-clay px-3 py-1 rounded-full">Presentation</span>
                  <span className="bg-desert-clay/20 text-desert-clay px-3 py-1 rounded-full">Documentation</span>
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Professional</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-desert-earth/20 text-desert-earth px-3 py-1 rounded-full">Problem Solving</span>
                  <span className="bg-desert-earth/20 text-desert-earth px-3 py-1 rounded-full">Team Collaboration</span>
                  <span className="bg-desert-earth/20 text-desert-earth px-3 py-1 rounded-full">Project Management</span>
                  <span className="bg-desert-earth/20 text-desert-earth px-3 py-1 rounded-full">Research Methods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-desert-earth">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-desert-clay">Biomechanics Research Lab</h3>
              <span className="text-gray-600">2023 - Present</span>
            </div>
            <p className="text-lg font-medium mb-2">Research Assistant</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Analyze joint mechanics using motion capture data and MATLAB</li>
              <li>Design and implement experimental protocols for biomechanical testing</li>
              <li>Collaborate with interdisciplinary teams to interpret research findings</li>
              <li>Develop automated data processing tools to improve research efficiency</li>
            </ul>
          </div>
          
          {/* Add more experience entries as needed */}
        </div>
      </section>

      {/* Contact */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-desert-earth">Contact</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-6">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out through any of the following channels:
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-desert-clay">📧</span>
              <a href="mailto:jpaulfallon@gmail.com" className="text-desert-sky hover:text-desert-clay transition-colors">
                jpaulfallon@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-desert-clay">🔗</span>
              <a href="https://linkedin.com/in/johnpaulfallon" target="_blank" rel="noopener noreferrer" className="text-desert-sky hover:text-desert-clay transition-colors">
                linkedin.com/in/johnpaulfallon
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-desert-clay">💻</span>
              <a href="https://github.com/KingFish317" target="_blank" rel="noopener noreferrer" className="text-desert-sky hover:text-desert-clay transition-colors">
                github.com/KingFish317
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}