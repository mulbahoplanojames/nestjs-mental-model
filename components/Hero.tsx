// "use client";

// import {
//   FaInstagram,
//   FaFacebook,
//   FaLinkedinIn,
//   FaBehance,
// } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-[#0a0a0a] flex items-center pt-16"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16">
//           {/* Left Content */}
//           <div className="flex-1 text-center md:text-left">
//             <p className="text-gray-400 text-sm mb-1">Hi I am</p>
//             <h2 className="text-white text-2xl md:text-3xl font-semibold mb-1">
//               Mahmood Fazile
//             </h2>
//             <h1 className="text-[#ff6b35] text-4xl md:text-6xl font-black leading-tight mb-6">
//               UI/UX designer
//             </h1>

//             {/* Social Icons */}
//             <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
//               {[FaInstagram, FaFacebook, FaLinkedinIn, FaBehance].map(
//                 (Icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="text-gray-400 hover:text-[#ff6b35] transition-colors text-lg"
//                   >
//                     <Icon />
//                   </a>
//                 ),
//               )}
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-4 justify-center md:justify-start mb-10">
//               <a
//                 href="#contact-me"
//                 className="px-6 py-3 bg-[#ff6b35] hover:bg-[#e55a28] text-white font-semibold text-sm rounded transition-colors"
//               >
//                 Hire Me
//               </a>
//               <a
//                 href="#"
//                 className="px-6 py-3 border border-white/20 hover:border-[#ff6b35] text-white font-semibold text-sm rounded transition-colors"
//               >
//                 Download CV
//               </a>
//             </div>

//             {/* Stats */}
//             <div className="flex gap-8 justify-center md:justify-start">
//               {[
//                 { value: "5+", label: "Experiences" },
//                 { value: "20+", label: "Project done" },
//                 { value: "80+", label: "Happy Clients" },
//               ].map((stat) => (
//                 <div key={stat.label} className="text-center md:text-left">
//                   <p className="text-white text-2xl font-black">{stat.value}</p>
//                   <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: Profile Image */}
//           <div className="flex-1 flex justify-center md:justify-end">
//             <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
//               {/* Circular glow/border */}
//               <div className="absolute inset-0 rounded-full border-2 border-[#ff6b35]/30" />
//               <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a1a] flex items-end justify-center">
//                 {/* Placeholder silhouette — replace src with actual image */}
//                 <img
//                   src="/profile.jpg"
//                   alt="Mahmood Fazile"
//                   className="w-full h-full object-cover object-top rounded-full"
//                   onError={(e) => {
//                     e.currentTarget.style.display = "none";
//                     if (e.currentTarget.parentElement) {
//                       e.currentTarget.parentElement.style.background =
//                         "linear-gradient(to bottom, #1a1a1a, #2a2a2a)";
//                     }
//                   }}
//                 />
//               </div>
//               {/* Decorative ring */}
//               <div className="absolute -inset-3 rounded-full border border-[#ff6b35]/10 pointer-events-none" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

const SOCIAL_ICONS = [FaInstagram, FaLinkedinIn, FaDribbble, FaBehance];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0a0a] flex items-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-16">
          {/* ── Left Content ── */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting */}
            <p className="text-gray-400 text-base mb-1">Hi I am</p>

            {/* Name */}
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
              Mahmood Fazile
            </h2>

            {/* Title */}
            <h1 className="text-[#ff6b35] text-5xl md:text-6xl font-black leading-tight mb-8">
              UI/UX designer
            </h1>

            {/* Social Icons — circular outlined buttons like in the image */}
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start mb-12">
              <a
                href="#contact-me"
                className="px-7 py-3 bg-[#ff6b35] hover:bg-[#e55a28] text-white font-bold text-sm rounded-md transition-colors"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="px-7 py-3 border border-gray-500 hover:border-[#ff6b35] text-white font-bold text-sm rounded-md transition-colors"
              >
                Downlead CV
              </a>
            </div>

            {/* Stats — with vertical dividers */}
            <div className="inline-flex items-stretch gap-0 bg-[#111] rounded-xl px-6 py-5 justify-center md:justify-start">
              {[
                { value: "5+", label: "Experiences" },
                { value: "20+", label: "Project done" },
                { value: "80+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i !== 0 && <div className="w-px h-10 bg-gray-600 mx-6" />}
                  <div className="text-center md:text-left">
                    <p className="text-[#ff6b35] text-2xl font-black leading-none">
                      {stat.value}
                    </p>
                    <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
              {/* Dark circle background */}
              <div className="w-full h-full rounded-full bg-[#1c1c1c] overflow-hidden flex items-end justify-center">
                <Image
                  src="/man.png"
                  alt="Mahmood Fazile — UI/UX Designer"
                  className="w-full h-full object-cover object-top rounded-full"
                  width={440}
                  height={440}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
