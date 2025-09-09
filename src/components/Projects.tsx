import { motion } from 'framer-motion'
import { Github, Eye, Star } from 'lucide-react'
import MotionLink from './MotionLink'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, shopping cart functionality, payment processing, and admin dashboard. Features include product management, order tracking, and responsive design.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Zion-01',
    live: '#',
    featured: true,
    stars: 45
  },
  {
    title: 'Task Management App',
    description: 'A comprehensive task management application with real-time collaboration, drag-and-drop functionality, and advanced filtering. Includes team management and progress tracking.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Socket.io'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Zion-01',
    live: '#',
    featured: true,
    stars: 32
  },
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, and user presence indicators. Built with WebSocket technology for instant communication.',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Zion-01',
    live: '#',
    featured: false,
    stars: 28
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application with location-based forecasts, interactive maps, and historical data visualization. Features include multiple location support and weather alerts.',
    tech: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Zion-01',
    live: '#',
    featured: false,
    stars: 19
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, contact form integration, and SEO optimization.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Zion-01',
    live: '#',
    featured: false,
    stars: 15
  },
  {
    title: 'Blog Platform',
    description: 'A content management system for blogs with markdown support, user authentication, and SEO features. Includes admin panel and analytics dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Markdown'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Zion-01',
    live: '#',
    featured: false,
    stars: 23
  }
]

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-20 max-w-7xl mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Here are some of my recent projects that showcase my skills in full-stack development, 
          UI/UX design, and problem-solving abilities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-transparent"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                {project.title.charAt(0)}
              </div>
              {project.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Star size={12} />
                  Featured
                </div>
              )}
              <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                <Star size={12} />
                {project.stars}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-gray-100 dark:bg-gray-700 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <MotionLink
                  href={project.github}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  newTab
                >
                  <Github size={16} />
                  Code
                </MotionLink>
                
                <MotionLink
                  href={project.live}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  newTab
                >
                  <Eye size={16} />
                  Live Demo
                </MotionLink>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* View More Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-12"
      >
        <MotionLink
          href="https://github.com/Zion-01"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 border border-gray-700 hover:border-gray-600 glow"
          newTab
        >
          <Github size={20} />
          View More on GitHub
        </MotionLink>
      </motion.div>
    </motion.section>
  )
}

export default Projects
