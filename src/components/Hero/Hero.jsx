// import { motion } from "framer-motion";
// import { Button } from "../ui/button";
// import { Link } from "react-router-dom";
// import { UserCheck, Users } from "lucide-react";
// import Communication from "../../assets/images/business_communication.avif";

// const Hero = () => {
//   return (
//     <div className="relative pb-16 overflow-hidden sm:pb-24">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           <div className=" sm:text-center lg:flex lg:items-center lg:col-span-6 lg:text-left">
//             <div className="mt-24">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium text-purple-500 rounded-full bg-blue-50">
//                   Next Era Learning Platform
//                 </span>
//               </motion.div>
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.1 }}
//                 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
//               >
//                 <span className="block">Grow Your Mind & </span>
//                 <span className="block mt-2 text-purple-500">
//                   Share Your Shine
//                 </span>
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="mt-6 text-base text-gray-500 dark:text-gray-400 sm:text-xl lg:text-lg xl:text-xl"
//               >
//                 Connect with others to teach what you know and learn new skills.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//                 className="mt-8 sm:flex sm:justify-center lg:justify-start"
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-center">
//                   <div className="mb-3 rounded-md sm:mb-0">
//                     <Button variant="purple" size="lg" asChild>
//                       <Link to="/signup">Get Started</Link>
//                     </Button>
//                   </div>
//                   <div className="rounded-md sm:ml-3">
//                     <Button variant="outline" size="lg" asChild>
//                       <Link to="/login">Login</Link>
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//           <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="bg-white shadow-xl dark:bg-gray-800 sm:mx-auto sm:w-full sn:max-w-md sm:overflow-hidden sm-rounded-2xl"
//             >
//               <div className="relative w-full aspect-[4/3]">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-400"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <img
//                     src={Communication}
//                     alt="Learning"
//                     className="object-cover w-full h-full opacity-30 mix-blend-overlay"
//                   />

//                   <div className="absolute inset-0 flex flex-col items-center justify-center p-6 ">
//                     <Users className="w-10 h-10 mb-2 text-purple-500" />
//                     <h3 className="text-xl font-semibold">
//                       Pass The Torch And Share The Light
//                     </h3>
//                     <p className="mt-2 text-sm text-center">
//                       Learning Today & Leading Tomorrow
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="px-4 py-6 sm:px-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <UserCheck className="w-5 h-5 mr-3 text-purple-500" />
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
//                         600k+ Members
//                       </h4>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">
//                         Actively Participating
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";
// import { Button } from "../ui/button";
// import { Link } from "react-router-dom";
// import { UserCheck, Users } from "lucide-react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import Communication from "../../assets/images/business_communication.avif";

// const Hero = () => {
//   const [text] = useTypewriter({
//     words: ["Grow Your Mind", "Share Your Shine", "Learn. Teach. Repeat."],
//     loop: true,
//     delaySpeed: 2000,
//   });

//   return (
//     <div className="relative pb-20 overflow-hidden sm:pb-28 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
//       {/* Floating glow lights */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-40 h-40 bg-purple-500 rounded-full top-10 left-10 opacity-20 blur-3xl animate-pulse" />
//         <div className="absolute bg-pink-500 rounded-full bottom-10 right-10 w-60 h-60 opacity-10 blur-3xl animate-ping" />
//       </div>

//       <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           {/* LEFT: Heading + Text + CTA */}
//           <div className="sm:text-center lg:flex lg:items-center lg:col-span-6 lg:text-left">
//             <div className="mt-24">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium text-white border rounded-full bg-purple-100/10 backdrop-blur-sm border-purple-500/30">
//                   Peer-to-Peer Skill Sharing Platform
//                 </span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.1 }}
//                 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
//               >
//                 <span>{text}</span>
//                 <Cursor cursorStyle="✨" />
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="max-w-xl mt-6 text-base text-purple-200 sm:text-lg lg:text-lg xl:text-xl"
//               >
//                 Teach what you know. Learn what you love. Collaborate, connect,
//                 and grow with people like you.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//                 className="mt-8 sm:flex sm:justify-center lg:justify-start"
//               >
//                 <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button variant="purple" size="lg" asChild>
//                       <Link to="/signup">Get Started</Link>
//                     </Button>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* RIGHT: Image Card */}
//           <div className="mt-16 ml-20 sm:mt-24 lg:col-span-6 lg:mt-16">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="bg-[#0f3460] shadow-2xl dark:bg-purple-800 sm:mx-auto sm:w-full sm:max-w-[500px] sm:overflow-hidden sm:rounded-2xl"
//             >
//               <div className="relative w-full aspect-[4/3] border border-white rounded-2xl overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 opacity-80"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <img
//                     src={Communication}
//                     alt="Learning"
//                     className="object-cover w-full h-full opacity-40 mix-blend-overlay"
//                   />
//                   <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
//                     <Users className="w-10 h-10 mb-2 text-purple-300 animate-pulse" />
//                     <h3 className="text-xl font-semibold text-white">
//                       Pass The Torch And Share The Light
//                     </h3>
//                     <p className="mt-2 text-sm text-purple-200">
//                       Learning Today & Leading Tomorrow
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="px-4 py-6 sm:px-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <UserCheck className="w-5 h-5 mr-3 text-purple-400" />
//                     <div>
//                       <h4 className="text-sm font-medium text-white">
//                         600k+ Members
//                       </h4>
//                       <p className="text-xs text-purple-300">
//                         Actively Participating
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Grow Your Mind", "Share Your Shine", "Learn. Teach. Repeat."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative pb-20 overflow-hidden sm:pb-28 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
      {/* Floating glow lights */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 bg-purple-500 rounded-full top-10 left-10 opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bg-pink-500 rounded-full bottom-10 right-10 w-60 h-60 opacity-10 blur-3xl animate-ping" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Heading + Text + CTA */}
          <div className="sm:text-center lg:flex lg:items-center lg:col-span-6 lg:text-left">
            <div className="mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium text-white border rounded-full bg-purple-100/10 backdrop-blur-sm border-purple-500/30">
                  Peer-to-Peer Skill Sharing Platform
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
              >
                <span>{text}</span>
                <Cursor cursorStyle="✨" />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-xl mt-6 text-base text-purple-200 sm:text-lg lg:text-lg xl:text-xl"
              >
                Teach what you know. Learn what you love. Collaborate, connect,
                and grow with people like you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="purple" size="lg" asChild>
                      <Link to="/signup">Get Started</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative mt-16 sm:mt-24 lg:col-span-6 lg:mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-[#0f3460] shadow-2xl dark:bg-purple-800 sm:mx-auto sm:w-full sm:max-w-[650px] sm:overflow-hidden sm:rounded-2xl relative"
            >
              <div className="relative w-full aspect-[4/3] border border-white rounded-2xl overflow-hidden">
                {/* No gradient overlay, to show image clearly */}
                <img
                  src="./skill.png"
                  alt="Skill exchange"
                  className="z-0 object-contain w-full h-full"
                />
                {/* Center overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                  <Users className="w-10 h-10 mb-2 text-purple-300 animate-pulse" />
                  <h3 className="mt-16 text-xl font-semibold text-white">
                    Pass The Torch And Share The Light
                  </h3>
                  <p className="mt-2 text-sm text-purple-200">
                    Learning Today & Leading Tomorrow
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
