import { motion } from 'framer-motion'

interface MotionButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
  disabled?: boolean
}

const MotionButton = ({
  onClick,
  type = 'button',
  className,
  children,
  disabled,
}: MotionButtonProps) => (
  <motion.button
    onClick={onClick}
    type={type}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={className}
    disabled={disabled}
  >
    {children}
  </motion.button>
)

export default MotionButton
