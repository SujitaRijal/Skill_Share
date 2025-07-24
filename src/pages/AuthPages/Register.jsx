// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom";
// import { UserCircle } from "lucide-react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// const Register = () => {
//   const apiUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8081"; // Fallback to 8081
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     resetForm,
//   } = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirm_password: "",
//       contact_number: "",
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//       email: Yup.string()
//         .email("Invalid email format")
//         .required("Email is required"),
//       password: Yup.string()
//         .min(6, "Minimum 6 characters")
//         .required("Password is required"),
//       confirm_password: Yup.string()
//         .oneOf([Yup.ref("password")], "Passwords must match")
//         .required("Confirm password is required"),
//       contact_number: Yup.string()
//         .matches(/^\d{10}$/, "Must be a 10-digit number")
//         .required("Contact number is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const payload = {
//           username: values.username,
//           email: values.email,
//           password: values.password,
//           contact_number: values.contact_number,
//         };

//         const response = await axios.post(`${apiUrl}/register`, payload, {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           timeout: 5000, // Add timeout to prevent hanging
//         });

//         toast.success("Registered Successfully");
//         resetForm();
//         setTimeout(() => {
//           navigate("/login");
//         }, 1500);
//       } catch (error) {
//         console.error("Registration error:", error);
//         if (error.code === "ERR_NETWORK") {
//           toast.error("Cannot connect to the backend. Please check if the server is running on port 8081.");
//         } else if (error.response) {
//           toast.error(`Registration failed: ${error.response.data.message || "Server error"}`);
//         } else {
//           toast.error("Registration failed. Please try again.");
//         }
//       }
//     },
//   });

//   const formFields = [
//     {
//       name: "username",
//       label: "Username",
//       type: "text",
//       placeholder: "Username",
//     },
//     {
//       name: "contact_number",
//       label: "Contact Number",
//       type: "text",
//       placeholder: "Contact Number",
//     },
//     {
//       name: "email",
//       label: "Email",
//       type: "email",
//       placeholder: "Email",
//     },
//     {
//       name: "password",
//       label: "Password",
//       type: showPassword ? "text" : "password",
//       placeholder: "Password",
//     },
//     {
//       name: "confirm_password",
//       label: "Confirm Password",
//       type: showPassword ? "text" : "password",
//       placeholder: "Confirm Password",
//     },
//   ];

//   return (
//     <motion.div
//       className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
//       style={{
//         backgroundImage:
//           "url('https://img.freepik.com/free-photo/flat-lay-stationery-arrangement-with-copy-space_23-2148279767.jpg?ga=GA1.1.780795257.1716114933&semt=ais_hybrid&w=740')",
//       }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
//       <motion.div
//         className="relative z-10 w-full max-w-md p-4 bg-white rounded-lg shadow-lg bg-opacity-90"
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex flex-col items-center mb-5">
//           <UserCircle className="mb-2 text-purple-500 w-14 h-14" />
//           <h2 className="text-3xl font-bold text-center text-purple-500 font-poppins">
//             Welcome To SkillShare!
//           </h2>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {formFields.map((field) => (
//             <div key={field.name} className="mb-2">
//               <label
//                 htmlFor={field.name}
//                 className="block mb-1 font-medium text-gray-700"
//               >
//                 {field.label}
//               </label>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 id={field.name}
//                 value={values[field.name]}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`w-full p-1 rounded-lg border ${
//                   touched[field.name] && errors[field.name]
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 } focus:outline-none focus:ring-2 focus:ring-purple-500`}
//                 placeholder={field.placeholder}
//               />
//               {touched[field.name] && errors[field.name] && (
//                 <div className="text-sm text-red-500">
//                   {errors[field.name]}
//                 </div>
//               )}
//             </div>
//           ))}

//           <div className="mb-4">
//             <label className="inline-flex items-center cursor-pointer select-none">
//               <input
//                 type="checkbox"
//                 checked={showPassword}
//                 onChange={() => setShowPassword(!showPassword)}
//                 className="mr-2 text-purple-500 form-checkbox"
//               />
//               {showPassword ? "Hide Password" : "Show Password"}
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white transition duration-300 bg-purple-500 rounded-md hover:bg-indigo-600"
//           >
//             Sign Up
//           </button>

//           <p className="mt-4 text-sm text-center text-gray-600">
//             Already Registered?{" "}
//             <Link
//               to="/login"
//               className="font-semibold text-purple-500 hover:underline"
//             >
//               Login Now
//             </Link>
//           </p>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Register;

import { useState, useEffect } from "react";
import {
  UserCircle,
  Eye,
  EyeOff,
  Mail,
  User,
  Phone,
  Lock,
  Sparkles,
  Heart,
  CheckCircle,
  XCircle,
  Loader,
  Zap,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const apiUrl = "http://localhost:8081"; // You can make this dynamic with env vars
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    contact_number: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [strengthScore, setStrengthScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  // Password strength calculator
  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  };

  useEffect(() => {
    if (formData.password) {
      setStrengthScore(calculatePasswordStrength(formData.password));
    } else {
      setStrengthScore(0);
    }
  }, [formData.password]);

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        return !value
          ? "Username is required"
          : value.length < 3
          ? "Username must be at least 3 characters"
          : "";
      case "email":
        return !value
          ? "Email is required"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Invalid email format"
          : "";
      case "password":
        return !value
          ? "Password is required"
          : value.length < 6
          ? "Minimum 6 characters required"
          : "";
      case "confirm_password":
        return !value
          ? "Confirm password is required"
          : value !== formData.password
          ? "Passwords must match"
          : "";
      case "contact_number":
        return !value
          ? "Contact number is required"
          : !/^\d{10}$/.test(value)
          ? "Must be exactly 10 digits"
          : "";
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
        const payload = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          contact_number: formData.contact_number,
        };

        // Simulate network delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const response = await fetch(`${apiUrl}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setShowConfetti(true);

          // Reset form after success animation
          setTimeout(() => {
            setFormData({
              username: "",
              email: "",
              password: "",
              confirm_password: "",
              contact_number: "",
            });
            setTouched({});
            setErrors({});
            setSubmitSuccess(false);
            setShowConfetti(false);
            // Here you could navigate to login page
            // navigate('/login');
          }, 3000);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Registration failed");
        }
      } catch (error) {
        console.error("Registration error:", error);
        setErrors({
          submit: error.message || "Registration failed. Please try again.",
        });
      }
    }

    setIsSubmitting(false);
  };

  const getIcon = (fieldName) => {
    const icons = {
      username: User,
      email: Mail,
      contact_number: Phone,
      password: Lock,
      confirm_password: Lock,
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

  const getPasswordStrengthColor = () => {
    if (strengthScore <= 2) return "bg-rose-400";
    if (strengthScore <= 3) return "bg-yellow-400";
    return "bg-emerald-400";
  };

  const getPasswordStrengthText = () => {
    if (strengthScore <= 2) return "Weak";
    if (strengthScore <= 3) return "Good";
    return "Strong";
  };

  const inputFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Choose your unique username",
    },
    {
      name: "contact_number",
      label: "Contact Number",
      type: "text",
      placeholder: "Your 10-digit phone number",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "your@email.com",
    },
    {
      name: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Create a secure password",
    },
    // {
    //   name: "confirm_password",
    //   label: "Confirm Password",
    //   type: showPassword ? "text" : "password",
    //   placeholder: "Confirm your password",
    // },
  ];

  if (submitSuccess) {
    return (
      <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        {/* Confetti Effect */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 animate-bounce opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="space-y-6 text-center animate-fadeIn">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <p className="text-lg text-gray-600">
            Your account has been created successfully!
          </p>
          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <Star className="w-5 h-5 fill-current" />
            <span>Redirecting you to login...</span>
            <Star className="w-5 h-5 fill-current" />
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
            {/* <div className="relative inline-block mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 blur-lg opacity-30 animate-pulse"></div>
              <UserCircle
                className="relative w-16 h-16 text-transparent bg-gradient-to-r from-rose-400 to-purple-500"
                style={{
                  background: "linear-gradient(45deg, #f472b6, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            </div> */}
            <h2 className="mb-2 text-3xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text">
              Join Our Community
            </h2>
            <p className="flex items-center justify-center gap-1 text-sm text-gray-500">
              Create your account
              <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            </p>
          </div>

          <div className="space-y-4">
            {inputFields.map(({ name, label, type, placeholder }) => (
              <div key={name} className="group">
                <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  {getIcon(name)}
                  {label}
                  {focusedField === name && (
                    <Zap className="w-4 h-4 text-purple-500 animate-pulse" />
                  )}
                </label>
                <div className="relative">
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(name)}
                    onBlur={() => handleBlur(name)}
                    className={`w-full px-4 py-2 pr-12 rounded-2xl border-2 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:scale-105 placeholder-gray-400 ${
                      touched[name] && errors[name]
                        ? "border-rose-300 focus:border-rose-400 shadow-lg shadow-rose-100"
                        : "border-gray-200 focus:border-purple-300 group-hover:border-rose-200 shadow-lg shadow-purple-50"
                    } ${
                      focusedField === name
                        ? "transform scale-105 shadow-xl"
                        : ""
                    }`}
                  />

                  {/* Field Status Icon */}
                  <div className="absolute transform -translate-y-1/2 right-12 top-1/2">
                    {getFieldStatus(name)}
                  </div>

                  {/* Password Toggle */}
                  {(name === "password" || name === "confirm_password") && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute text-gray-400 transition-colors transform -translate-y-1/2 right-3 top-1/2 hover:text-rose-400"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>

                {/* Password Strength Indicator */}
                {name === "password" && formData.password && (
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full">
                        <div
                          className={`h-full transition-all duration-500 ${getPasswordStrengthColor()}`}
                          style={{ width: `${(strengthScore / 5) * 100}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          strengthScore <= 2
                            ? "text-rose-500"
                            : strengthScore <= 3
                            ? "text-yellow-500"
                            : "text-emerald-500"
                        }`}
                      >
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {touched[name] && errors[name] && (
                  <div className="flex items-center gap-1 mt-2 text-sm text-rose-500 animate-shake">
                    <div className="w-1 h-1 rounded-full bg-rose-500 animate-pulse"></div>
                    {errors[name]}
                  </div>
                )}
              </div>
            ))}

            {/* Show Password Toggle */}
            <div className="flex items-center gap-3 py-1">
              <div className="relative">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="sr-only"
                />
                <label
                  htmlFor="showPassword"
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div
                    className={`w-6 h-6 rounded-xl border-2 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
                      showPassword
                        ? "bg-gradient-to-r from-rose-400 to-purple-500 border-transparent shadow-lg"
                        : "border-gray-300 group-hover:border-rose-300 group-hover:shadow-md"
                    }`}
                  >
                    {showPassword && (
                      <CheckCircle className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="text-sm text-gray-600 transition-colors group-hover:text-purple-600">
                    Show passwords
                  </span>
                </label>
              </div>
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
                    Creating your account...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    Create Account
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="inline-block font-semibold text-transparent transition-all duration-300 bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text hover:from-rose-600 hover:to-purple-600 hover:scale-105"
              >
                Log In
              </button>
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

export default Register;
