import { motion } from "framer-motion"

export function ImageContainer({ 
  image, 
  onClick, 
  index = 0,
  showOverlay = true,
  className = "" 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-background p-4">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute top-2 right-2 w-4 h-4 bg-primary/30 rounded-full" />
      <div className="absolute bottom-2 left-2 w-3 h-3 bg-accent/40 rounded-full" />
    </motion.div>
  )
}
