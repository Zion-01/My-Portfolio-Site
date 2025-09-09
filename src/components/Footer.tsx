// components/Footer.tsx
import { Github } from 'lucide-react'
import MotionLink from './MotionLink'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="py-6 text-center text-gray-600 dark:text-gray-400 text-sm"
>
  <div className="flex justify-center items-center gap-4">
    <MotionLink
      href="https://github.com/Zion-01"
      newTab
      className="hover:text-blue-600 dark:hover:text-white transition-colors"
    >
      <Github className="w-5 h-5" />
    </MotionLink>
    <span>© {new Date().getFullYear()} David Adeyiza</span>
  </div>
</motion.footer>

  )
}

export default Footer
