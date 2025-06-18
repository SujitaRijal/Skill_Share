import {
  BookOpen,
  UserCheck2Icon,
  Star,
  Users2Icon,
  Rocket,
  SearchCheck,
  Repeat,
  MessageCircle,
  ShieldCheck,
  Globe,
  Zap,
} from "lucide-react";
import CountUp from "react-countup";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const categories = [
  {
    icon: <SearchCheck className="w-8 h-8" />,
    title: "Smart Matching",
    desc: "Our Set Intersection algorithm matches you with perfect learning partners based on complementary skills,ensuring highly relevant connections.",
    delay: 0,
  },
  {
    icon: <Repeat className="w-8 h-8" />,
    title: "Bidirectional Learning",
    desc: "Be both teacher & learner. Share your expertise while acquiring new skills in a  mutually beneficial exchange ecosystem.",
    delay: 0.1,
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Real-time Communication",
    desc: "Connect instantly with matched users through our integrated chat system.Schedule sessions and collaborate seamlessly",
    delay: 0.2,
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Trust & Feedback",
    desc: "Build reputation through our rating system. Quality feedback ensures trustworthy exchanges and continuous improvement.",
    delay: 0.3,
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Community Driven",
    desc: "Join a sustainable learning ecosystem that grows naturally within the community.No monetary barriers,just pure knowlegde exchange.",
    delay: 0.4,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast & Efficient",
    desc: "Lightning-fast matching in under 2 seconds.Our optimized algorithms ensure you find the right patners quickly.",
    delay: 0.5,
  },
];

const Explores = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 text-purple-500 py-14 md:px-12 lg:px-20 font-poppins"
      id="Explore"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2 text-2xl font-bold text-purple-500 sm:text-4xl "
      >
        Why Choose{" "}
        <span className="font-light underline underline-offset-4 decoration-1 under">
          SkillShare
        </span>
      </motion.h1>
      <motion.p
        className="max-w-2xl mt-2 mb-10 text-center text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        SkillShare is your gateway to knowledge and personal growth. Whether
        you're here to learn or to teach, our platform is designed to empower
        your journey.
      </motion.p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="relative p-8 transition-shadow duration-300 bg-white shadow-sm oveflow-hidden dark:bg-gray-800 rounded-xl hover:shadow-md glass-card hover:scale-110"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute h-20 opacity-50 -right-4 -bottom-4 w-14 dark:bg-blue-900/20"></div>
            <div className="relative">
              <div className="inline-flex items-center p-2 mb-4 text-purple-500 rounded-lg">
                {cat.icon}
              </div>
              <h4 className="mb-2 text-xl font-semibold">{cat.title}</h4>
              <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                {cat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        ref={ref}
        className="grid w-full grid-cols-1 gap-10 px-4 mx-auto mt-16 text-center max-w-7xl sm:grid-cols-3"
      >
        <div>
          <h3 className="text-3xl font-bold text-purple-500">
            {inView && (
              <CountUp end={50000} duration={2} separator="," suffix="+" />
            )}
          </h3>
          <p className="text-gray-600">Active Learners</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-purple-500">
            {inView && (
              <CountUp end={12000} duration={2} separator="," suffix="+" />
            )}
          </h3>
          <p className="text-gray-600">Courses Shared</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-purple-500">
            {inView && (
              <CountUp end={8000} duration={2} separator="," suffix="+" />
            )}
          </h3>
          <p className="text-gray-600">Expert Mentors</p>
        </div>
      </div>
    </div>
  );
};

export default Explores;
