// components/Footer.tsx
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
    <span>© {new Date().getFullYear()} David Adeyiza</span>
  </div>
</motion.footer>

  )
}

export default Footer
