// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="justify-between w-full p-6 pt-10 overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]  sm:px-6 lg:px-20">
//       <div className="flex flex-col items-start justify-between w-full gap-4 md:flex-row">
//         <div className="flex-1 mb-8 md:mb-0">
//           <h3 className="mb-8 text-lg font-bold text-white">SKILL SHARE</h3>
//           <p className="mt-4 text-base leading-relaxed text-white md:text-base">
//             Where Learning Meets Giving
//           </p>
//         </div>

//         <div className="flex-1 mb-8 md:mb-0">
//           <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
//           <ul className="flex flex-col gap-2 text-white">
//             <Link to="/" className=" hover:text-purple-500">
//               Home
//             </Link>
//             <Link to="/About" className=" hover:text-purple-500">
//               About
//             </Link>
//             <Link to="/Explore" className="hover:text-purple-500">
//               Explore
//             </Link>
//             <Link to="/Testimonials" className="hover:text-purple-500">
//               Testimonials
//             </Link>
//             <Link to="/Contact" className=" hover:text-purple-500">
//               Contact
//             </Link>
//           </ul>
//         </div>

//         <div className="flex-1 mb-8 md:mb-0">
//           <h3 className="mb-4 text-lg font-bold text-white">Support</h3>
//           <ul className="flex flex-col gap-2 text-white">
//             <li className=" hover:text-purple-500">Help Centre</li>
//             <li className="hover:text-purple-500">Contact Us</li>
//             <li className=" hover:text-purple-500">Privacy Policy</li>
//             <li className=" hover:text-purple-500">Terms of Service</li>
//           </ul>
//         </div>

//         <div className="flex-1 mb-8 md:mb-0">
//           <h3 className="mb-4 text-lg font-bold text-white">Connect</h3>
//           <ul className="flex flex-col gap-2 text-white">
//             <li className=" hover:text-purple-500">Community Forum</li>
//             <li className=" hover:text-purple-500">Blog</li>
//             <li className=" hover:text-purple-500">Newsletter</li>
//             <li className="hover:text-purple-500">Social Media</li>
//           </ul>
//         </div>

//         <div className="flex-1 mb-8 md:mb-0">
//           <h3 className="mb-4 text-lg font-bold text-white">
//             Subscribe too our newsletter
//           </h3>
//           <p className="mb-4 text-white max-w-80">
//             {" "}
//             The latest news,articles, and resources sent to your inbox weekly.
//           </p>
//           <div className="flex gap-2">
//             <input
//               className="w-full p-2 text-white border border-gray-700 rounded focus:outline-none md:w-auto"
//               type="email"
//               placeholder="Enter your email"
//             />
//             <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-indigo-600">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-between gap-4 px-4 py-4 mx-auto mt-10 text-white border-t border-gray-400 md:flex-row max-w-7xl">
//         <p>© 2025 SKILL SHARE. All Rights Reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b2a7ea81-1f3a-45da-8852-e40b8085dfbe", // Replace with your actual Web3Forms access key
          subject: "New Newsletter Subscriber!",
          email: email,
          message: `Please add ${email} to the newsletter.`,
        }),
      });

      if (res.ok) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        toast.error("Subscription failed. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="justify-between w-full p-6 pt-10 overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] sm:px-6 lg:px-32 ">
      <div className="flex flex-col items-start justify-between w-full gap-4 px-4 md:flex-row">
        {/* Logo & Tagline */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-8 text-lg font-bold text-white">SKILL SHARE</h3>
          <p className="mt-4 text-base leading-relaxed text-white md:text-base">
            Where Learning Meets Giving
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-white">
            <Link to="/" className="hover:text-purple-500">
              Home
            </Link>
            <Link to="/About" className="hover:text-purple-500">
              About
            </Link>
            <Link to="/Explore" className="hover:text-purple-500">
              Explore
            </Link>
            <Link to="/Testimonials" className="hover:text-purple-500">
              Testimonials
            </Link>
            <Link to="/Contact" className="hover:text-purple-500">
              Contact
            </Link>
          </ul>
        </div>

        {/* Support */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">Support</h3>
          <ul className="flex flex-col gap-2 text-white">
            <li className="hover:text-purple-500">Help Centre</li>
            <li className="hover:text-purple-500">Contact Us</li>
            <li className="hover:text-purple-500">Privacy Policy</li>
            <li className="hover:text-purple-500">Terms of Service</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">Connect</h3>
          <ul className="flex flex-col gap-2 text-white">
            <li className="hover:text-purple-500">Community Forum</li>
            <li className="hover:text-purple-500">Blog</li>
            <li className="hover:text-purple-500">Newsletter</li>
            <li className="hover:text-purple-500">Social Media</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-white">
            Subscribe to our newsletter
          </h3>
          <p className="mb-4 text-white max-w-80">
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              className="w-full p-2 text-white bg-transparent border border-gray-700 rounded focus:outline-none md:w-auto"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-indigo-600"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-4 mx-auto mt-10 text-white border-t border-gray-400 md:flex-row max-w-7xl">
        <p>© 2025 SKILL SHARE. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
