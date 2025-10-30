
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import ImageGallery from "@/components/image-gallery"
// import CTASection from "@/components/cta-section"

// const ImageCollage = () => {
//   return (
//     <div className="relative w-full h-full flex items-center justify-center overflow-visible">
//       <img
//         src="/gallery/hero-main.png"
//         alt="Hero Main"
//       className="w-[85%] sm:w-[65%] md:w-[70%] h-auto object-contain opacity-90 transition-transform duration-500 ease-out"
//         // className="w-[75%] sm:w-[60%] md:w-[70%] h-auto object-contain opacity-90 transition-transform duration-500 ease-out"
//       />
//     </div>
//   )
// }

// export default function HomePage() {
//   return (
//     <div className="min-h-screen relative flex flex-col items-center bg-gray-50 overflow-x-hidden">
//       <div
//         className="fixed inset-0 bg-cover bg-center bg-repeat opacity-20 z-0"
//         style={{ backgroundImage: "url('/images/sunflower-bg.jpg')" }}
//       />

//       <main className="relative z-10 flex flex-col items-center w-full">
//         <section className="mt-2 mb-2 flex flex-col items-center relative w-full">
//           {/* Hero Section */}
//           <motion.div
//             initial={{ scale: 1.05, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.1, ease: "easeOut" }}
//             className="relative w-full overflow-visible h-[400px] sm:h-[500px] md:h-[80vh]"
//           >
//             <ImageCollage />

//             <motion.div
//               initial={{ opacity: 0, y: -40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="absolute w-full flex items-center justify-center"
//               style={{ top: "31%", transform: "translateY(-50%)" }}
//             >
//               <h1 className="font-sans text-center">
//                 <div className="relative">
//                   <span className="absolute -inset-0.5"></span>
//                   <span className="relative text-3xl sm:text-5xl md:text-[6rem] font-extrabold text-[#fea900] leading-none drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)] tracking-wider block">
//                     Bano Arts
//                   </span>
//                   <div className="absolute inset-0 mix-blend-overlay"></div>
//                 </div>
//                 <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-[#4e3d0e] mt-1">
//                   "Art That Consoles You"
//                 </span>
//               </h1>
//             </motion.div>
//           </motion.div>

      

//           {/* Tagline + Button Container */}
// <div className="max-w-7xl mx-auto px-6 sm:px-6 -mt-20 text-center">
//   {/* Tagline */}
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: 0.5 }}
//     className="mb-0"
//   >
//     <p className="font-['Allura'] font-semibold text-xl sm:text-3xl md:text-4xl text-[#4e3d0e] leading-snug">
//       Where Portraits Come Alive, Calligraphy Speaks Faith, and Every Piece Honors Islamic Beauty
//     </p>
//   </motion.div>

//   {/* Button */}
 
// </div>


//           {/* Button */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="mt-5"
//           >
//             <Button
//               asChild
//               size="lg"
//               className="px-10 py-6 text-xl bg-gradient-to-r from-[#fea900] to-[#e0b481] text-(--color-primary-foreground) hover:opacity-90"
//             >
//               <Link to="/collection">Explore Collections</Link>
//             </Button>
//           </motion.div>

//           <ImageGallery />
//           <CTASection />
//         </section>
//       </main>
//     </div>
//   )
// }






import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ImageGallery from "@/components/image-gallery"
import CTASection from "@/components/cta-section"

const ImageCollage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      <img
        src="/gallery/hero-main.png"
        alt="Hero Main"
      className="w-[85%] sm:w-[65%] md:w-[70%] h-auto object-contain opacity-90 transition-transform duration-500 ease-out"
        // className="w-[75%] sm:w-[60%] md:w-[70%] h-auto object-contain opacity-90 transition-transform duration-500 ease-out"
      />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center bg-gray-50 overflow-x-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-20 z-0"
        style={{ backgroundImage: "url('/images/sunflower-bg.jpg')" }}
      />

      <main className="relative z-10 flex flex-col items-center w-full">
        <section className="mt-2 mb-2 flex flex-col items-center relative w-full">
          {/* Hero Section */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative w-full overflow-visible h-[400px] sm:h-[500px] md:h-[80vh]"
          >
            <ImageCollage />

            <motion.div
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="absolute w-full flex items-center justify-center top-[48%] sm:top-[31%] md:top-[42%] transform -translate-y-1/2"
>
              <h1 className="font-sans text-center">
                <div className="relative">
                  <span className="absolute -inset-0.5"></span>
                  <span className="relative text-3xl sm:text-5xl md:text-[6rem] font-extrabold text-[#fea900] leading-none drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)] tracking-wider block">
                    Bano Arts
                  </span>
                  <div className="absolute inset-0 mix-blend-overlay"></div>
                </div>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-[#4e3d0e] mt-1">
                  "Art That Consoles You"
                </span>
              </h1>
            </motion.div>
          </motion.div>

      

          {/* Tagline + Button Container */}
<div className="max-w-7xl mx-auto px-6 sm:px-6 -mt-20 text-center">
  {/* Tagline */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="mb-0"
  >
    <p className="font-['Allura'] font-semibold text-xl sm:text-3xl md:text-4xl text-[#4e3d0e] leading-snug">
      Where Portraits Come Alive, Calligraphy Speaks Faith, and Every Piece Honors Islamic Beauty
    </p>
  </motion.div>

  {/* Button */}
 
</div>


          {/* Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-5"
          >
            <Button
              asChild
              size="lg"
              className="px-10 py-6 text-xl bg-gradient-to-r from-[#fea900] to-[#e0b481] text-(--color-primary-foreground) hover:opacity-90"
            >
              <Link to="/collection">Explore Collections</Link>
            </Button>
          </motion.div>

          <ImageGallery />
          <CTASection />
        </section>
      </main>
    </div>
  )
}


