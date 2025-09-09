import { motion } from 'framer-motion'

interface MotionLinkProps {
  href: string
  className?: string
  children: React.ReactNode
  newTab?: boolean
}

const MotionLink = ({ href, className, children, newTab = false }: MotionLinkProps) => (
  <motion.a
    href={href}
    target={newTab ? '_blank' : undefined}
    rel={newTab ? 'noopener noreferrer' : undefined}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={className}
  >
    {children}
  </motion.a>
)

export default MotionLink
