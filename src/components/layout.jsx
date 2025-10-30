// // import Navbar from "./navbar"
// // import Footer from "./footer"
// // import WhatsAppButton from "./whatsapp-button"

// // export default function Layout({ children }) {
// //   return (
// //     <div className="min-h-screen flex flex-col relative isolate">
// //       <div className="z-110 relative">
// //         <Navbar />
// //       </div>
// //       <main className="flex-grow pt-24 relative z-90">
// //         {children}
// //       </main>
// //       <div className="z-110 relative">
// //         <Footer />
// //       </div>
// //       <div className="z-50 relative">
// //         <WhatsAppButton />
// //       </div>
// //     </div>
// //   )
// // }





// import Navbar from "./navbar"
// import Footer from "./footer"
// import WhatsAppButton from "./whatsapp-button"

// export default function Layout({ children }) {
//   return (
//     <div className="min-h-screen flex flex-col relative isolate">
//       <div className="relative">
//         <Navbar />
//       </div>
//       <main className="flex-grow pt-24 relative">
//         {children}
//       </main>
//       <div className="relative">
//         <Footer />
//       </div>
//       <div className="relative">
//         <WhatsAppButton />
//       </div>
//     </div>
//   )
// }




import Navbar from "./navbar"
import Footer from "./footer"
import WhatsAppButton from "./whatsapp-button"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative isolate">
      <div className="relative">
        <Navbar />
      </div>
      <main className="flex-grow pt-24 relative">
        {children}
      </main>
      <div className="relative">
        <Footer />
      </div>
      <div className="relative">
        <WhatsAppButton />
      </div>
    </div>
  )
}
