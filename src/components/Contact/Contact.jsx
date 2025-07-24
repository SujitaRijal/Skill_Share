// import React from "react";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", ""); //your access key

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("");
//       toast.success("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       toast.error(data.message);
//       setResult("");
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -200 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="flex flex-col items-center justify-center w-full px-4 text-purple-500 py-14 md:px-12 lg:px-20 font-poppins"
//       id="Contact"
//     >
//       <h1 className="mb-2 text-2xl font-bold text-purple-500 sm:text-4xl ">
//         Contact{" "}
//         <span className="font-light underline underline-offset-4 decoration-1 underoration-1 under">
//           Us
//         </span>
//       </h1>
//       <p className="max-w-2xl mt-2 mb-10 text-center text-gray-600 dark:text-gray-40080 ">
//         Ready to Make a Move? Let's Build Your Future Together
//       </p>

//       <form
//         onSubmit={onSubmit}
//         className="max-w-2xl px-4 pt-4 mx-auto text-gray-600 bg-purple-100 rounded-lg sm:px-8"
//       >
//         <div className="flex flex-wrap gap-y-4">
//           <div className="w-full mt-3 text-left">
//             <label htmlFor="name" className="block mb-1 font-semibold">
//               Name <span className="text-red-800">*</span>
//             </label>
//             <input
//               id="name"
//               name="Name"
//               autoComplete="name"
//               type="text"
//               placeholder="Enter Your Name"
//               required
//               className="w-full px-4 py-2 mt-1 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div className="w-full text-left">
//             <label htmlFor="email" className="block mb-1 font-semibold">
//               Email Address <span className="text-red-800">*</span>
//             </label>
//             <input
//               id="email"
//               name="Email"
//               autoComplete="email"
//               type="email"
//               placeholder="Enter Your Email Address"
//               required
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div className="w-full text-left">
//             <label htmlFor="number" className="block mb-1 font-semibold">
//               Phone Number <span className="text-red-800">*</span>
//             </label>
//             <input
//               id="number"
//               name="Number"
//               autoComplete="tel"
//               type="tel"
//               placeholder="Enter Your Phone Number"
//               required
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         </div>

//         <div className="my-4 text-left">
//           <label htmlFor="message" className="block mb-1 font-semibold">
//             Messages
//           </label>
//           <textarea
//             id="message"
//             name="Message"
//             placeholder="Your Message..."
//             required
//             className="w-full h-48 px-4 py-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//         </div>

//         <button
//           disabled={!!result}
//           className={`w-full px-4 py-2 mb-12 text-white transition-colors duration-300 rounded-lg ${
//             result
//               ? "bg-green-500 cursor-not-allowed"
//               : "bg-purple-500 hover:bg-indigo-600"
//           }`}
//         >
//           {result ? result : "Send Message"}
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
  Loader2,
  Clock,
  Heart,
  Zap,
} from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [formProgress, setFormProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fields = Object.values(formData);
    const filledFields = fields.filter((field) => field.trim() !== "").length;
    setFormProgress((filledFields / fields.length) * 100);
  }, [formData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (formProgress < 100) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (!/^9[7-8]\d{8}$/.test(formData.phone)) {
      toast.error("Enter a valid 10-digit Nepal phone number.");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b2a7ea81-1f3a-45da-8852-e40b8085dfbe", // Replace with actual key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Contact Message",
          from_name: formData.name,
          botcheck: "",
        }),
      });

      const result = await response.json();
      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success("Message sent successfully!");
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "24/7 Support",
      desc: "Get help whenever you need it",
      value: "Always available through the platform",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Response",
      desc: "Fast turnaround on all inquiries",
      value: "Average response time: 2-4 hours",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Driven",
      desc: "Built for learners, by learners",
      value: "Join thousands of skill sharers",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full px-4 py-20 overflow-hidden text-gray-800 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 md:px-12 lg:px-20 font-poppins"
      id="Contact"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-40 h-40 rounded-full top-10 left-10 bg-purple-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute w-32 h-32 delay-1000 rounded-full bottom-20 right-10 bg-blue-200/30 blur-2xl animate-bounce"></div>
        <div className="absolute w-24 h-24 delay-500 rounded-full top-1/2 left-1/4 bg-pink-200/30 blur-xl animate-ping"></div>
      </div>

      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="p-8 text-center transform bg-white rounded-3xl animate-bounce">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-800">
              Message Sent!
            </h3>
            <p className="text-gray-600">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-purple-500 sm:text-4xl">
            Contact{" "}
            <span className="font-light underline underline-offset-4">Us</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Ready to transform your learning journey? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Support Features */}
          <div className="space-y-6 lg:col-span-1">
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 transition-all duration-300 border border-gray-200 cursor-pointer group bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-lg"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h4 className="mb-1 font-bold text-gray-800">
                  {feature.title}
                </h4>
                <p className="mb-2 text-sm text-gray-600">{feature.desc}</p>
                <p className="font-medium text-purple-600">{feature.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="relative p-8 border border-gray-200 shadow-xl bg-white/90 backdrop-blur-sm rounded-3xl"
            >
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Form Progress
                  </span>
                  <span className="text-sm font-bold text-purple-600">
                    {Math.round(formProgress)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 transition-all duration-500 ease-out rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${formProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div
                  className={`relative transition-all duration-300 ${
                    focusedField === "name" ? "transform scale-105" : ""
                  }`}
                >
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        focusedField === "name"
                          ? "text-purple-500"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your full name"
                      required
                      className="w-full py-4 pl-12 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Email */}
                  <div className="relative">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="w-full py-4 pl-12 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+977"
                        required
                        className="w-full py-4 pl-12 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute w-5 h-5 text-gray-400 left-3 top-4" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help..."
                      rows={6}
                      required
                      className="w-full py-4 pl-12 pr-4 border border-gray-300 resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || formProgress < 100}
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 ${
                    isSubmitting || formProgress < 100
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg shadow-purple-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-100 text-emerald-700">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium text-center">
              We typically respond within 2-4 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
