import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", ""); //your access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center w-full px-4 text-purple-500 py-14 md:px-12 lg:px-20 font-poppins"
      id="Contact"
    >
      <h1 className="mb-2 text-2xl font-bold text-purple-500 sm:text-4xl ">
        Contact{" "}
        <span className="font-light underline underline-offset-4 decoration-1 underoration-1 under">
          Us
        </span>
      </h1>
      <p className="max-w-2xl mt-2 mb-10 text-center text-gray-600 dark:text-gray-40080 ">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl px-4 pt-4 mx-auto text-gray-600 bg-purple-100 rounded-lg sm:px-8"
      >
        <div className="flex flex-wrap gap-y-4">
          <div className="w-full mt-3 text-left">
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name <span className="text-red-800">*</span>
            </label>
            <input
              id="name"
              name="Name"
              autoComplete="name"
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-2 mt-1 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="w-full text-left">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email Address <span className="text-red-800">*</span>
            </label>
            <input
              id="email"
              name="Email"
              autoComplete="email"
              type="email"
              placeholder="Enter Your Email Address"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="w-full text-left">
            <label htmlFor="number" className="block mb-1 font-semibold">
              Phone Number <span className="text-red-800">*</span>
            </label>
            <input
              id="number"
              name="Number"
              autoComplete="tel"
              type="tel"
              placeholder="Enter Your Phone Number"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="my-4 text-left">
          <label htmlFor="message" className="block mb-1 font-semibold">
            Messages
          </label>
          <textarea
            id="message"
            name="Message"
            placeholder="Your Message..."
            required
            className="w-full h-48 px-4 py-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          disabled={!!result}
          className={`w-full px-4 py-2 mb-12 text-white transition-colors duration-300 rounded-lg ${
            result
              ? "bg-green-500 cursor-not-allowed"
              : "bg-purple-500 hover:bg-indigo-600"
          }`}
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
