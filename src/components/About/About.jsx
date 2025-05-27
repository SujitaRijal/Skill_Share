// import {
//   BookOpenCheck,
//   UserPlus,
//   UserRoundCheck,
//   UsersRound,
// } from "lucide-react";
// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   const steps = [
//     {
//       icon: <UserPlus className="w-8 h-8" />,
//       title: "Create Your Profile",
//       desc: "Register and list the skills you have and the skills you want to learn.Build your learning profile.",
//     },
//     {
//       icon: <UserRoundCheck className="w-8 h-8" />,
//       title: "Get Matched",
//       desc: "Our intelligent algorithm finds perfect matches based on complementary skills using Set Intersection technology.",
//     },
//     {
//       icon: <UsersRound className="w-8 h-8" />,
//       title: "Connect & Schedule",
//       desc: "Chat with matched users,discuss your learning goals, & schedule skill exchange sessions.",
//     },
//     {
//       icon: <BookOpenCheck className="w-8 h-8" />,
//       title: "Learn & Teach",
//       desc: "Exchange knowledge in your sessions,learn new skills & help others grow.Rate and provide feedback.",
//     },
//   ];
//   return (
//     <div
//       className="flex flex-col items-center justify-center w-full px-4 text-purple-500py-14 md:px-12 lg:px-20 font-poppins"
//       id="About"
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="mb-2 text-2xl font-bold text-purple-500 sm:text-4xl "
//       >
//         How{" "}
//         <span className="font-light underline underline-offset-4 decoration-1 under">
//           SkillShare Works
//         </span>
//       </motion.h1>
//       <motion.p
//         className="max-w-2xl mt-2 mb-10 text-center text-gray-600 dark:text-gray-400"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//       >
//         A simple process to unlock your learning journey. Join thousands of
//         learners today.
//       </motion.p>

//       <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {steps.map((step, i) => (
//           <motion.div
//             key={i}
//             className="relative p-8 transition-shadow duration-300 bg-white shadow-sm oveflow-hidden dark:bg-gray-800 rounded-xl hover:shadow-md glass-card hover:scale-110"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="absolute h-20 opacity-50 -right-4 -bottom-4 w-14 dark:bg-blue-900/20"></div>
//             <div className="relative">
//               <div className="inline-flex items-center p-2 mb-4 text-purple-500 rounded-lg">
//                 {step.icon}
//               </div>
//               <h4 className="mb-2 text-xl font-semibold">{step.title}</h4>
//               <p className="mt-2 text-gray-500 dark:text-gray-400 ">
//                 {step.desc}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;
import {
  UserPlus,
  BookOpenCheck,
  UsersRound,
  UserRoundCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const steps = [
    {
      icon: <UserPlus className="text-purple-600 w-7 h-7" />,
      title: "Create Your Profile",
      desc: "Register and list the skills you have and the skills you want to learn. Build your learning profile.",
    },
    {
      icon: <UserRoundCheck className="text-purple-600 w-7 h-7" />,
      title: "Get Matched",
      desc: "Our intelligent algorithm finds perfect matches based on complementary skills using Set Intersection technology.",
    },
    {
      icon: <UsersRound className="text-purple-600 w-7 h-7" />,
      title: "Connect & Schedule",
      desc: "Chat with matched users, discuss your learning goals, and schedule skill exchange sessions..",
    },
    {
      icon: <BookOpenCheck className="text-purple-600 w-7 h-7" />,
      title: "Explore & Learn",
      desc: "Exchange knowledge in your sessions, learn new skills, and help others grow. Rate and provide feedback.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 text-purple-500 py-14 md:px-12 lg:px-20 font-poppins"
      id="About"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2 text-2xl font-bold text-purple-500 sm:text-4xl "
      >
        How{" "}
        <span className="font-light underline underline-offset-4 decoration-1 under">
          SkillShare Works
        </span>
      </motion.h1>
      <motion.p
        className="max-w-2xl mt-2 mb-10 text-center text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        A simple process to unlock your learning journey. Join thousands of
        learners today.
      </motion.p>
      <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-8 transition-shadow duration-300 bg-white shadow-sm oveflow-hidden dark:bg-gray-800 rounded-xl hover:shadow-md glass-card"
          >
            <div className="absolute h-20 opacity-50 -right-4 -bottom-4 w-14 dark:bg-blue-900/20"></div>
            <div className="relative">
              <div className="inline-flex items-center p-2 mb-4 rounded-lg">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold ">{step.title}</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default About;
