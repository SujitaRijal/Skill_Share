import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8081"; // Fallback to 8081
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      contact_number: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
      contact_number: Yup.string()
        .matches(/^\d{10}$/, "Must be a 10-digit number")
        .required("Contact number is required"),
    }),
    onSubmit: async (values) => {
      try {
        const payload = {
          username: values.username,
          email: values.email,
          password: values.password,
          contact_number: values.contact_number,
        };

        const response = await axios.post(`${apiUrl}/register`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000, // Add timeout to prevent hanging
        });

        toast.success("Registered Successfully");
        resetForm();
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } catch (error) {
        console.error("Registration error:", error);
        if (error.code === "ERR_NETWORK") {
          toast.error("Cannot connect to the backend. Please check if the server is running on port 8081.");
        } else if (error.response) {
          toast.error(`Registration failed: ${error.response.data.message || "Server error"}`);
        } else {
          toast.error("Registration failed. Please try again.");
        }
      }
    },
  });

  const formFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
    },
    {
      name: "contact_number",
      label: "Contact Number",
      type: "text",
      placeholder: "Contact Number",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Password",
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: showPassword ? "text" : "password",
      placeholder: "Confirm Password",
    },
  ];

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/flat-lay-stationery-arrangement-with-copy-space_23-2148279767.jpg?ga=GA1.1.780795257.1716114933&semt=ais_hybrid&w=740')",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
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
          {formFields.map((field) => (
            <div key={field.name} className="mb-2">
              <label
                htmlFor={field.name}
                className="block mb-1 font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-1 rounded-lg border ${
                  touched[field.name] && errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder={field.placeholder}
              />
              {touched[field.name] && errors[field.name] && (
                <div className="text-sm text-red-500">
                  {errors[field.name]}
                </div>
              )}
            </div>
          ))}

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

          <p className="mt-4 text-sm text-center text-gray-600">
            Already Registered?{" "}
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