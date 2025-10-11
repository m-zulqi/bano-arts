import { motion } from 'framer-motion'

export function Loading({ size = 'default' }) {
  const sizes = {
    small: 'w-5 h-5',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        className={`${sizes[size]} border-4 border-primary/30 border-t-primary rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
