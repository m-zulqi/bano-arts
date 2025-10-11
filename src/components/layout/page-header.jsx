import { motion } from "framer-motion"

export function PageHeader({ title, description }) {
  return (
    <section className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  )
}
