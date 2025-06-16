import React from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  impact: string;
  role: string;
  category: 'Hardware' | 'Software';
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Smart IoT Environmental Monitor',
      description: 'Real-time environmental monitoring system using ESP8266 microcontrollers with web dashboard for data visualization and alerts.',
      impact: 'Deployed in 5+ locations, monitoring air quality for 500+ students',
      role: 'Lead Developer',
      category: 'Hardware',
      technologies: ['ESP8266', 'Python', 'Django', 'React', 'PostgreSQL'],
      githubUrl: '#',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'
    },
    {
      id: 2,
      title: 'Club Management Platform',
      description: 'Comprehensive web platform for managing club activities, member registrations, event scheduling, and communication.',
      impact: 'Used by 3 clubs, managing 300+ active members and 50+ events',
      role: 'Full-Stack Developer',
      category: 'Software',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      githubUrl: '#',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    },
    {
      id: 3,
      title: 'Autonomous Line-Following Robot',
      description: 'Competition-ready robot with advanced sensors and machine learning algorithms for optimal path detection and obstacle avoidance.',
      impact: 'Won 2nd place in Inter-College Robotics Competition 2024',
      role: 'Team Lead & Hardware Engineer',
      category: 'Hardware',
      technologies: ['Arduino', 'C++', 'OpenCV', 'Raspberry Pi', 'TensorFlow Lite'],
      githubUrl: '#',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      id: 4,
      title: 'Event Registration System',
      description: 'Scalable event management system with QR code generation, payment integration, and real-time attendance tracking.',
      impact: 'Processed 1000+ registrations for various club events in 2024',
      role: 'Project Manager & Developer',
      category: 'Software',
      technologies: ['React', 'TypeScript', 'Firebase', 'Stripe API', 'QR.js'],
      githubUrl: '#',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg'
    },
    {
      id: 5,
      title: 'IoT-Based Disaster Management System',
      description: 'Smart alert system using sensors, ESP boards, and Django backend to trigger alerts, track safety responses, and dispatch rescue with GPS support.',
      impact: 'Used in simulation tests for school safety drills; scalable to community-wide deployments.',
      role: 'System Architect & Backend Developer',
      category: 'Hardware',
      technologies: ['ESP8266', 'Django', 'Python', 'React', 'GPS', 'SMTP'],
      githubUrl: '#',
      image: 'https://images.pexels.com/photos/8778954/pexels-photo-8778954.jpeg'
    },
    {
      id: 6,
      title: 'Dental Clinic Web App',
      description: 'Custom appointment system for a local dental clinic with admin dashboard, patient profiles, booking management, and mail notifications.',
      impact: 'Improved appointment tracking and reduced manual errors by 80%',
      role: 'Full-Stack Developer',
      category: 'Software',
      technologies: ['React', 'Firebase', 'Tailwind', 'EmailJS'],
      githubUrl: '#',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/3845768/pexels-photo-3845768.jpeg'
    }
  ];

  const [filter, setFilter] = React.useState<'All' | 'Hardware' | 'Software'>('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions in robotics, web development, and IoT systems 
            that have made real impact in our community.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            {['All', 'Hardware', 'Software'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as any)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'Hardware' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    <Tag size={12} className="mr-1" />
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">{project.role}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 line-clamp-3">{project.description}</p>
                
                <div className="bg-primary-50 p-3 rounded-lg mb-4">
                  <p className="text-primary-800 text-sm font-medium">Impact: {project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <a
            href="mailto:yousure90@example.com"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;