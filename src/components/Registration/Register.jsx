import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import Toaster from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Username is required"),

        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),

        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),

        confirm_password: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm password is required"),
      }),
      onSubmit: (values, action) => {
        Toaster.success("Registered Successfully");
        console.log("Form submitted", values);
        action.resetForm();
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      },
    });

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover "
      style={{
        backgroundImage:
         "url('https://img.freepik.com/free-photo/flat-lay-stationery-arrangement-with-copy-space_23-2148279767.jpg?ga=GA1.1.780795257.1716114933&semt=ais_hybrid&w=740')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/*Overlay with blur*/}
      {/* // */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "></div>
      <motion.div
        className="relative z-10 w-full max-w-md p-4 bg-white rounded-lg shadow-lg bg-opacity-90"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center mb-5">
          <UserCircle className="mb-2 text-purple-500 w-14 h-14" />
          <h2 className="text-3xl font-bold text-center text-purple-500 font-poppins">
            Welcome To SkillShare!
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block mb-1 font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="Username"
              className={`w-full mb-1 p-1 rounded-lg border ${
                touched.username && errors.username
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {touched.username && errors.username && (
              <div className="mb-1 text-sm text-red-500">{errors.username}</div>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={`w-full mb-1 p-1 rounded-lg border ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {touched.email && errors.email && (
              <div className="mb-1 text-sm text-red-500">{errors.email}</div>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={`w-full mb-1 p-1 rounded-lg border ${
                touched.password && errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {touched.password && errors.password && (
              <div className="mb-1 text-sm text-red-500">{errors.password}</div>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="confirm_password"
              className="block mb-1 font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm_password}
              className={`w-full mb-1 p-1 rounded-lg border ${
                touched.confirm_password && errors.confirm_password
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
            />
            {touched.confirm_password && errors.confirm_password && (
              <div className="mb-1 text-sm text-red-500">
                {errors.confirm_password}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2 text-purple-500 form-checkbox"
              />
              {showPassword ? "Hide Password" : "Show Password"}
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-300 bg-purple-500 rounded-md hover:bg-indigo-600"
          >
            Sign Up
          </button>
          <p className="mt-4 text-sm text-center text-[#6B7280]">
            Already Registered? {""}
            <Link
              to="/login"
              className="font-semibold text-purple-500 hover:underline"
            >
              Login Now
            </Link>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Register;
