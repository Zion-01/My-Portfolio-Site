import { motion } from 'framer-motion'
import { Code, Coffee, BookOpen, Globe, Heart, Award } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Full-Stack Developer',
      company: 'Freelance',
      description: 'Building modern web applications and providing technical solutions for clients.'
    },
    {
      year: '2022 - 2023',
      title: 'Frontend Developer',
      company: 'Personal Projects',
      description: 'Developed various projects using React, TypeScript, and modern web technologies.'
    },
    {
      year: '2021 - 2022',
      title: 'Web Development Student',
      company: 'Self-Learning',
      description: 'Intensive learning of web development fundamentals and modern frameworks.'
    }
  ]

  const interests = [
    { icon: Code, text: 'Open Source' },
    { icon: Coffee, text: 'Problem Solving' },
    { icon: BookOpen, text: 'Continuous Learning' },
    { icon: Globe, text: 'Web Technologies' },
    { icon: Heart, text: 'User Experience' },
    { icon: Award, text: 'Best Practices' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          I'm a passionate full-stack developer with a strong focus on building scalable, 
          user-friendly web applications. I love turning complex problems into simple, 
          beautiful, and intuitive solutions.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">My Journey</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I started my journey in web development with a curiosity about how websites work. 
            What began as a hobby quickly turned into a passion as I discovered the endless 
            possibilities of creating digital experiences that can impact people's lives.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Today, I specialize in modern web technologies like React, TypeScript, Node.js, 
            and PostgreSQL. I believe in writing clean, maintainable code and creating 
            applications that not only work flawlessly but also provide an exceptional user experience.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                <div className="mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.year}</span>
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">{exp.title}</h4>
                <p className="text-blue-600 dark:text-blue-300 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">What I'm Passionate About</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <interest.icon className="w-8 h-8 mb-3 text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{interest.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
