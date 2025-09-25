import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch(image.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${image.title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
      >
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Button
            onClick={handleDownload}
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#fea900] rounded-full"
          >
            <Download className="w-6 h-6" />
          </Button>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#fea900] rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-5xl w-full mx-auto"
        >
          <div className="relative aspect-[16/9] w-full">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="text-white text-2xl font-bold mb-2">{image.title}</h3>
            <p className="text-white/80">{image.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
