import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserCheck, Users } from "lucide-react";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative pb-16 overflow-hidden sm:pb-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className=" sm:text-center lg:flex lg:items-center lg:col-span-6 lg:text-left">
            <div className="mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium text-purple-500 rounded-full bg-blue-50">
                  Next Era Learning Platform
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
              >
                <span className="block">Grow Your Mind & </span>
                <span className="block mt-2 text-purple-500">
                  Share Your Shine
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-base text-gray-500 dark:text-gray-400 sm:text-xl lg:text-lg xl:text-xl"
              >
                Connect with others to teach what you know and learn new skills.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="mb-3 rounded-md sm:mb-0">
                    <Button variant="purple" size="lg" asChild>
                      <Link to="/signup">Get Started</Link>
                    </Button>
                  </div>
                  <div className="rounded-md sm:ml-3">
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white shadow-xl dark:bg-gray-800 sm:mx-auto sm:w-full sn:max-w-md sm:overflow-hidden sm-rounded-2xl"
            >
              <div className="relative w-full aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-400"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://img.freepik.com/free-vector/flat-design-business-communication-with-device_23-2149151733.jpg?ga=GA1.1.780795257.1716114933&semt=ais_hybrid&w=740"
                    alt="Learning"
                    className="object-cover w-full h-full opacity-30 mix-blend-overlay"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 ">
                    <Users className="w-10 h-10 mb-2 text-purple-500" />
                    <h3 className="text-xl font-semibold">
                      Pass The Torch And Share The Light
                    </h3>
                    <p className="mt-2 text-sm text-center">
                      Learning Today & Leading Tomorrow
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-6 sm:px-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <UserCheck className="w-5 h-5 mr-3 text-purple-500" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        600k+ Members
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Actively Participating
                      </p>
                    </div>
                  </div>
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
