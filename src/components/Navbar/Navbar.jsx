import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Menu, X, Users } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthenticated = false;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* {---Logo---} */}

          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Users className="w-6 h-6 text-purple-500" />
              <span className="ml-3 text-xl font-bold text-">SKILL SHARE</span>
            </motion.div>
          </Link>

          {/* {---Desktop Nav---} */}
          <nav className="items-center hidden space-x-4 md:flex ">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/"
                className={`text-md font-medium hover:text-purple-500 transition-colors  ml-5  ${
                  location.pathname === "/" ? "text-purple-500" : " text-black"
                }`}
              >
                Home
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/Explore"
                className={`text-md font-medium transition-colors hover:text-purple-500  mx-5  ${
                  location.pathname === "/Explore"
                    ? "text-purple-500"
                    : " text-black"
                }`}
              >
                Explore
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/MyProfile"
                className={`text-md font-medium transition-colors hover:text-purple-500  mr-5 ${
                  location.pathname === "/MyProfile"
                    ? "text-purple-500"
                    : " text-black"
                }`}
              >
                My Profile
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/MyRequest"
                className={`text-md font-medium transition-colors hover:text-purple-500  mr-5 ${
                  location.pathname === "/MyRequest"
                    ? "text-purple-500"
                    : " text-black"
                }`}
              >
                My Request
              </Link>
            </motion.div>
          </nav>

          {/* {---Auth Buttons---} */}
          <div className="items-center hidden space-x-4 md:flex">
            {isAuthenticated ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Button variant="outline" asChild>
                    <Link to="/login">Log In</Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button variant="purple" asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </motion.div>
              </>
            )}
          </div>

          {/* {---Mobile Menu Button---} */}

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* {---Mobile Menu---} */}

      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden dark:bg-gray-900">
          <div className="px-4 py-5 space-y-4">
            <Link
              to="/"
              className="block py-2 text-base font-medium hover:text-purple-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/ExploreSkills"
              className="block py-2 text-base font-medium hover:text-purple-500 "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore Skills
            </Link>

            <Link
              to="/MyProfile"
              className="block py-2 text-base font-medium hover:text-purple-500 "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Profile
            </Link>

            <Link
              to="/MyRequest"
              className="block py-2 text-base font-medium hover:text-purple-500 "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Request
            </Link>
            <div className="pt-4 space-y-3">
              {isAuthenticated ? (
                <Button asChild className="w-full">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/login">Log In</Link>
                  </Button>
                  <Button variant="purple" asChild className="w-full">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
