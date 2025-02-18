"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const ContactPage = () => {
  const form = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Check for empty fields
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_pjsgvpy", // Replace with your EmailJS service ID
        "template_4hd0cl8", // Replace with your EmailJS template ID
        form.current,
        "ptdFhOgKHaZ8Hvhxc" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you for reaching out! We'll get back to you soon.");
          setIsSubmitted(true);
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
          setError("");
        },
        (error) => {
          console.log("Email send error:", error.text);
          alert("Something went wrong! Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4"
    >
      <motion.div variants={fadeIn} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#69AD6C] text-center mb-6">
          Contact Us
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {isSubmitted && <p className="text-green-500 text-center mb-4">Message sent successfully!</p>}

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#69AD6C]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#69AD6C]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#69AD6C]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#69AD6C]"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full text-white py-3 rounded-md text-lg font-medium shadow-md hover:shadow-lg transition-all ${
              loading ? "bg-gray-500" : "bg-[#69AD6C]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
