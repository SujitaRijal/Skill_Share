import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

const Login = () => {
  const [RememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      }),
      onSubmit: (values, action) => {
        console.log("logging in...", values);
        toast.success("Login Successfull");
        action.resetForm();
        setTimeout(() => {
          navigate("/");
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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "></div>
      <motion.div
        className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-90"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center mb-5">
          <UserCircle className="mb-2 text-purple-500 w-14 h-14" />
          <h2 className="text-3xl font-bold text-center text-purple-500 font-poppins">
            Welcome Back!
          </h2>
          <p className="mb-2 text-sm text-gray-600">
            Please enter your details
          </p>
        </div>
        <form onSubmit={handleSubmit}>
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
              <div className="mb-2 text-sm text-red-500">{errors.email}</div>
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
              type="password"
              name="password"
              id="password"
              placeholder="Password"
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
              <div className="mb-2 text-sm text-red-500">{errors.password}</div>
            )}
          </div>

          <div className="flex flex-col items-center justify-between mb-4 md:flex-row">
            <label className="text-sm ">
              <input
                type="checkbox"
                className="mr-2"
                checked={RememberMe}
                onChange={() => setRememberMe(!RememberMe)}
              />
              Remember Me
            </label>
            <Link
              to="/forgetPassword"
              className="text-purple-500 font-sm hover:underline"
            >
              Forget Password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-300 bg-purple-500 rounded-lg hover:bg-indigo-600"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-center text-[#6B7280]">
            Don't have an account? {""}
            <Link
              to="/signup"
              className="font-semibold text-purple-500 hover:underline"
            >
              SignUp
            </Link>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
