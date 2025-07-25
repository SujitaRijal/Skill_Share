// import { useFormik } from "formik";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { toast } from "react-hot-toast";
// import { motion } from "framer-motion";
// import { UserCircle } from "lucide-react";

// const Login = () => {
//   const [RememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: {
//         email: "",
//         password: "",
//       },
//       validationSchema: Yup.object({
//         email: Yup.string()
//           .email("Invalid email format")
//           .required("Email is required"),
//         password: Yup.string().required("Password is required"),
//       }),
//       onSubmit: (values, action) => {
//         console.log("logging in...", values);
//         toast.success("Login Successfull");
//         action.resetForm();
//         setTimeout(() => {
//           navigate("/dashboard");
//         });
//       },
//     });
//   return (
//     <motion.div
//       className="relative flex items-center justify-center min-h-screen bg-center bg-cover "
//       style={{
//         backgroundImage:
//           "url('https://img.freepik.com/free-photo/flat-lay-stationery-arrangement-with-copy-space_23-2148279767.jpg?ga=GA1.1.780795257.1716114933&semt=ais_hybrid&w=740')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/*Overlay with blur*/}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "></div>
//       <motion.div
//         className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-90"
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex flex-col items-center mb-5">
//           <UserCircle className="mb-2 text-purple-500 w-14 h-14" />
//           <h2 className="text-3xl font-bold text-center text-purple-500 font-poppins">
//             Welcome Back!
//           </h2>
//           <p className="mb-2 text-sm text-gray-600">
//             Please enter your details
//           </p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-2">
//             <label
//               htmlFor="email"
//               className="block mb-1 font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//               className={`w-full mb-1 p-1 rounded-lg border ${
//                 touched.email && errors.email
//                   ? "border-red-500"
//                   : "border-gray-300"
//               } focus:outline-none focus:ring-2 focus:ring-purple-500`}
//             />
//             {touched.email && errors.email && (
//               <div className="mb-2 text-sm text-red-500">{errors.email}</div>
//             )}
//           </div>
//           <div className="mb-2">
//             <label
//               htmlFor="password"
//               className="block mb-1 font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//               className={`w-full mb-1 p-1 rounded-lg border ${
//                 touched.password && errors.password
//                   ? "border-red-500"
//                   : "border-gray-300"
//               } focus:outline-none focus:ring-2 focus:ring-purple-500`}
//             />
//             {touched.password && errors.password && (
//               <div className="mb-2 text-sm text-red-500">{errors.password}</div>
//             )}
//           </div>

//           <div className="flex flex-col items-center justify-between mb-4 md:flex-row">
//             <label className="text-sm ">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={RememberMe}
//                 onChange={() => setRememberMe(!RememberMe)}
//               />
//               Remember Me
//             </label>
//             <Link
//               to="/forgotPassword"
//               className="text-purple-500 font-sm hover:underline"
//             >
//               Forgot Password
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white transition duration-300 bg-purple-500 rounded-lg hover:bg-indigo-600"
//           >
//             Login
//           </button>
//           <p className="mt-4 text-sm text-center text-[#6B7280]">
//             Don't have an account? {""}
//             <Link
//               to="/signup"
//               className="font-semibold text-purple-500 hover:underline"
//             >
//               SignUp
//             </Link>
//           </p>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  CheckCircle,
  XCircle,
  Loader,
  Sparkles,
  Zap,
  Star,
  Heart,
} from "lucide-react";

const Login = () => {
  const apiUrl = "http://localhost:8081";
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const navigate = useNavigate();

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return !value
          ? "Email is required"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Invalid email format"
          : "";
      case "password":
        return !value ? "Password is required" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleFocus = (name) => {
    setFocusedField(name);
  };

  const handleBlur = (name) => {
    setFocusedField("");
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, formData[name]),
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      try {
        // Simulate network delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const response = await fetch(`${apiUrl}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setLoginSuccess(true);

          // Navigate after success animation
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
        setErrors({
          submit: error.message || "Login failed. Please try again.",
        });
      }
    }

    setIsSubmitting(false);
  };

  const getIcon = (fieldName) => {
    const icons = {
      email: Mail,
      password: Lock,
    };
    const IconComponent = icons[fieldName];
    return (
      <IconComponent
        className={`w-5 h-5 transition-colors duration-300 ${
          focusedField === fieldName ? "text-purple-500" : "text-rose-400"
        }`}
      />
    );
  };

  const getFieldStatus = (fieldName) => {
    if (!touched[fieldName]) return null;
    if (errors[fieldName]) return <XCircle className="w-5 h-5 text-rose-500" />;
    if (formData[fieldName])
      return <CheckCircle className="w-5 h-5 text-emerald-500" />;
    return null;
  };

  if (loginSuccess) {
    return (
      <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        {/* Success Animation */}
        <div className="space-y-6 text-center animate-fadeIn">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
            Welcome Back!
          </h2>
          <p className="text-lg text-gray-600">
            Login successful! Redirecting to dashboard...
          </p>
          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <Star className="w-5 h-5 fill-current animate-pulse" />
            <span>Taking you to your dashboard</span>
            <Star className="w-5 h-5 fill-current animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 rounded-full top-1/4 left-1/4 bg-rose-300 opacity-60 animate-pulse"></div>
        <div
          className="absolute w-3 h-3 bg-purple-300 rounded-full top-3/4 right-1/4 opacity-40 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-pink-400 rounded-full top-1/2 left-1/3 opacity-80 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-2 h-2 rounded-full opacity-50 top-1/3 right-1/3 bg-violet-300 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Soft background glow */}
        <div className="absolute inset-0 transform rounded-full bg-gradient-to-r from-rose-200/30 to-purple-200/30 blur-3xl -rotate-6 animate-pulse"></div>

        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 transform hover:scale-[1.02] transition-all duration-500">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 blur-lg opacity-30 animate-pulse"></div>
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-rose-400 to-purple-500">
                <Sparkles className="w-8 h-8 text-white fill-current animate-pulse" />
              </div>
            </div>
            <h2 className="mb-2 text-3xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text">
              Welcome Back!
            </h2>
            <p className="flex items-center justify-center gap-1 text-sm text-gray-500">
              Sign in to your account
              <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Field */}
            <div className="group">
              <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                {getIcon("email")}
                Email
                {focusedField === "email" && (
                  <Zap className="w-4 h-4 text-purple-500 animate-pulse" />
                )}
              </label>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  className={`w-full px-4 py-3 pr-12 rounded-2xl border-2 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:scale-105 placeholder-gray-400 ${
                    touched.email && errors.email
                      ? "border-rose-300 focus:border-rose-400 shadow-lg shadow-rose-100"
                      : "border-gray-200 focus:border-purple-300 group-hover:border-rose-200 shadow-lg shadow-purple-50"
                  } ${
                    focusedField === "email"
                      ? "transform scale-105 shadow-xl"
                      : ""
                  }`}
                />
                <div className="absolute transform -translate-y-1/2 right-3 top-1/2">
                  {getFieldStatus("email")}
                </div>
              </div>
              {touched.email && errors.email && (
                <div className="flex items-center gap-1 mt-2 text-sm text-rose-500 animate-shake">
                  <div className="w-1 h-1 rounded-full bg-rose-500 animate-pulse"></div>
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                {getIcon("password")}
                Password
                {focusedField === "password" && (
                  <Zap className="w-4 h-4 text-purple-500 animate-pulse" />
                )}
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus("password")}
                  onBlur={() => handleBlur("password")}
                  className={`w-full px-4 py-3 pr-12 rounded-2xl border-2 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:scale-105 placeholder-gray-400 ${
                    touched.password && errors.password
                      ? "border-rose-300 focus:border-rose-400 shadow-lg shadow-rose-100"
                      : "border-gray-200 focus:border-purple-300 group-hover:border-rose-200 shadow-lg shadow-purple-50"
                  } ${
                    focusedField === "password"
                      ? "transform scale-105 shadow-xl"
                      : ""
                  }`}
                />
                <div className="absolute flex items-center gap-2 transform -translate-y-1/2 right-3 top-1/2">
                  {getFieldStatus("password")}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 transition-colors hover:text-rose-400"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              {touched.password && errors.password && (
                <div className="flex items-center gap-1 mt-2 text-sm text-rose-500 animate-shake">
                  <div className="w-1 h-1 rounded-full bg-rose-500 animate-pulse"></div>
                  {errors.password}
                </div>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="sr-only"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
                        rememberMe
                          ? "bg-gradient-to-r from-rose-400 to-purple-500 border-transparent shadow-lg"
                          : "border-gray-300 group-hover:border-rose-300 group-hover:shadow-md"
                      }`}
                    >
                      {rememberMe && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm text-gray-600 transition-colors group-hover:text-purple-600">
                      Remember me
                    </span>
                  </label>
                </div>
              </div>
              <Link
                to="/forgotPassword"
                className="text-sm font-medium text-transparent transition-all duration-300 bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text hover:from-rose-600 hover:to-purple-600 hover:scale-105"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="flex items-center gap-2 p-3 text-sm border bg-rose-50 border-rose-200 rounded-xl text-rose-600">
                <XCircle className="w-4 h-4" />
                {errors.submit}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="relative flex items-center justify-center w-full gap-2 py-3 overflow-hidden font-semibold text-white transition-all duration-300 transform shadow-lg rounded-2xl bg-gradient-to-r from-rose-400 to-purple-500 hover:from-rose-500 hover:to-purple-600 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting && (
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 animate-pulse"></div>
              )}
              <div className="relative flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Signing you in...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 fill-current animate-pulse" />
                    Sign In
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="inline-block font-semibold text-transparent transition-all duration-300 bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text hover:from-rose-600 hover:to-purple-600 hover:scale-105"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* Decorative elements */}
          <div
            className="absolute w-6 h-6 rounded-full -top-2 -left-2 bg-gradient-to-r from-rose-300 to-pink-300 opacity-60 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-4 h-4 rounded-full -bottom-2 -right-2 bg-gradient-to-r from-purple-300 to-indigo-300 opacity-60 animate-bounce"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Login;
