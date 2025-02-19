export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  image?: string;
  imageColor: string;
  technologies: string[];
  challenges: string[];
  outcomes: string[];
  featured: boolean;
  date: string;
}

// Replace these with your actual projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Biomechanics Research',
    slug: 'biomechanics-research',
    description: 'Analysis of joint mechanics using MATLAB and motion capture data.',
    fullDescription: 'This project involved analyzing human joint mechanics during various movement patterns. Using motion capture technology, I collected kinematic data and developed MATLAB algorithms to process and visualize the results.',
    imageColor: 'bg-desert-clay',
    technologies: ['MATLAB', 'Motion Capture', 'Data Analysis', 'Biomechanics'],
    challenges: [
      'Filtering noisy sensor data while preserving important movement characteristics',
      'Developing algorithms that work across different subjects and movement patterns',
      'Creating visualizations of complex 3D movement data'
    ],
    outcomes: [
      'Identified key movement patterns associated with increased joint loading',
      'Developed reusable MATLAB libraries for biomechanical analysis',
      'Created an automated reporting system for quick data interpretation'
    ],
    featured: true,
    date: '2023'
  },
  {
    id: '2',
    title: 'System Optimization',
    slug: 'system-optimization',
    description: 'Improved efficiency in mechanical systems through innovative design modifications.',
    fullDescription: 'This project focused on optimizing the efficiency of a mechanical system by redesigning key components and implementing innovative control strategies.',
    imageColor: 'bg-desert-sage',
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
    featured: true,
    date: '2022'
  },
  // Add more projects as needed
];

export function getFeaturedProjects() {
  return projects.filter(project => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find(project => project.slug === slug);
}