import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/fadeInUp'
import {
  SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiPostgresql, SiGit,
  SiDjango, SiJavascript, SiHtml5, SiCss3, SiMongodb, SiFirebase,
  SiNextdotjs, SiVuedotjs, SiDocker, SiAmazon, SiFigma, SiGithub
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Language' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Language' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', category: 'Frontend' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Styling' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Backend' },
  { name: 'Django', icon: SiDjango, color: '#092E20', category: 'Backend' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900', category: 'Cloud' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'Version Control' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Design' },
  { name: 'GitHub', icon: SiGithub, color: '#181717', category: 'Tools' }
]

const Skills = () => {
  return (
    <motion.section
      {...fadeInUp}
      id="skills"
      className="py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Skills & Technologies</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          I work with a diverse range of technologies to create modern, scalable applications.
        </p>
      </motion.div>

      {/* Skills Categories */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'DevOps', 'Cloud', 'Design', 'Tools'].map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-4 py-2 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105"
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Scrolling Skills Bar */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-950 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-950 z-10 pointer-events-none" />
        
        {/* Skills Container */}
        <div className="flex gap-8 animate-scroll">
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-1`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center min-w-[120px] p-6 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div 
                className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center shadow-lg"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <skill.icon 
                  className="w-8 h-8" 
                  style={{ color: skill.color }}
                />
              </div>
              <span className="text-gray-900 dark:text-white font-medium text-sm text-center">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">{skill.category}</span>
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless scrolling */}
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-2`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (index + skills.length) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center min-w-[120px] p-6 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div 
                className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center shadow-lg"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <skill.icon 
                  className="w-8 h-8" 
                  style={{ color: skill.color }}
                />
              </div>
              <span className="text-gray-900 dark:text-white font-medium text-sm text-center">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">18+</div>
          <div className="text-gray-700 dark:text-gray-300">Technologies</div>
        </div>
        <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
          <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
        </div>
        <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
          <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Skills
