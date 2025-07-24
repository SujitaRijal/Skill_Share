// import {
//   UserPlus,
//   BookOpenCheck,
//   UsersRound,
//   UserRoundCheck,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const About = () => {
//   const steps = [
//     {
//       icon: <UserPlus className="text-purple-600 w-7 h-7" />,
//       title: "Create Your Profile",
//       desc: "Register and list the skills you have and the skills you want to learn. Build your learning profile.",
//     },
//     {
//       icon: <UserRoundCheck className="text-purple-600 w-7 h-7" />,
//       title: "Get Matched & Connect",
//       desc: "Find users with complementary skills. Get matched based on your learning goals and interests.",
//     },

//     {
//       icon: <BookOpenCheck className="text-purple-600 w-7 h-7" />,
//       title: "Explore & Learn",
//       desc: "Exchange knowledge in your sessions, learn new skills, and help others grow. Rate and provide feedback.",
//     },
//   ];

//   return (
//     <div
//       className="flex flex-col items-center justify-center w-full px-4 text-purple-500 bg-gray-100 py-14 md:px-12 lg:px-20 font-poppins"
//       id="About"
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="mb-2 text-2xl font-bold text-purple-500 sm:text-4xl "
//       >
//         About{" "}
//         <span className="font-light underline underline-offset-4 decoration-1 under">
//           Skill Share
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
//       <div className="grid grid-cols-1 gap-10 px-16 mt-16 md:grid-cols-2 lg:grid-cols-3">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="relative p-8 transition-shadow duration-300 bg-white shadow-sm oveflow-hidden dark:bg-gray-800 rounded-xl hover:shadow-md glass-card"
//           >
//             <div className="absolute h-20 opacity-50 -right-4 -bottom-4 w-14 dark:bg-blue-900/20"></div>
//             <div className="relative">
//               <div className="inline-flex items-center p-2 mb-4 rounded-lg">
//                 {step.icon}
//               </div>
//               <h3 className="mb-2 text-xl font-semibold ">{step.title}</h3>
//               <p className="mt-2 text-gray-500 dark:text-gray-400">
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
      desc: "Register and list the skills you have and want to learn. Build your learning identity in seconds.",
    },
    {
      icon: <UserRoundCheck className="text-purple-600 w-7 h-7" />,
      title: "Get Matched & Connect",
      desc: "Find learners with complementary skills. Get paired based on shared goals and start chatting.",
    },
    {
      icon: <BookOpenCheck className="text-purple-600 w-7 h-7" />,
      title: "Explore & Learn",
      desc: "Exchange skills in live sessions, give feedback, and grow together. It's free and peer-powered!",
    },
  ];

  return (
    <section
      id="About"
      className="w-full px-4 py-20 bg-gradient-to-b from-purple-50 via-white to-purple-100 md:px-12 lg:px-20 font-poppins"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2 text-2xl font-bold text-center text-purple-500 sm:text-3xl"
      >
        About{" "}
        <span className="font-light underline  decoration-purple-400 underline-offset-4">
          Skill Share
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mt-4 text-center text-gray-600 dark:text-gray-400"
      >
        A simple 3-step journey to unlock your potential. Join thousands
        learning together—faster and better.
      </motion.p>

      <div className="grid grid-cols-1 gap-10 px-16 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-8 transition-shadow duration-300 bg-white border rounded-xl hover:shadow-xl hover:border-purple-400/70 dark:bg-gray-800 group"
          >
            <div className="absolute w-16 h-16 bg-purple-300 rounded-full -right-6 -bottom-6 opacity-10 blur-2xl"></div>
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-purple-100 rounded-full group-hover:bg-purple-200">
              {step.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
