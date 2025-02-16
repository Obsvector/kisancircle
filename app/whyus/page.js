"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const WhyChooseUs = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="pt-[5%]">
      {/* About KisanCircle */}
      <motion.div variants={fadeIn} className="py-12 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-semibold text-[#69AD6C] mb-4">Bringing Farm-Fresh Goodness to You!</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At KisanCircle, we are dedicated to sourcing the **purest, freshest, and highest-quality agricultural products** directly from local farmers. 
          We believe in **sustainable farming, ethical sourcing, and natural processing**, ensuring you receive **chemical-free, nutritious, and flavorful** products every time.
        </p>
      </motion.div>

    {/* Key Features Section */}
<motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-8 px-6 lg:px-20 text-center">
  {[
    { title: "Sustainability", img: "/sustainability.webp", desc: "We support eco-friendly, chemical-free farming." },
    { title: "Direct from Farmers", img: "/farmers.jpg", desc: "No middlemen – just farm-fresh goodness." },
    { title: "100% Natural", img: "/natural.jpg", desc: "No preservatives, no artificial processing." },
  ].map((feature, index) => (
    <motion.div key={index} variants={fadeIn} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <Image 
        src={feature.img} 
        alt={feature.title} 
        width={300}  // Increased width
        height={250} // Increased height
        className="rounded-md object-cover w-[300px] h-[250px]"
      />
      <h3 className="text-xl font-bold text-[#69AD6C] mt-4">{feature.title}</h3>
      <p className="text-gray-600 mt-2">{feature.desc}</p>
    </motion.div>
  ))}
</motion.div>

      {/* Process Section */}
      <motion.div variants={fadeIn} className="py-12 px-6 lg:px-20 text-center">
  <h2 className="text-3xl font-semibold text-[#69AD6C] mb-6">Our Process</h2>

  {[
    { title: "Procurement", img: "/procurement.jpg", desc: "We source Rice, Bengal Gram, Red Chilli, Corn, and Pressed Oil directly from farmers across Andhra Pradesh, Telangana, and Tamil Nadu.", flip: false },
    { title: "Processing", img: "/processing.webp", desc: "Our products go through rigorous quality checks, minimal processing, and traditional sun-drying or cold-pressing to retain their purity.", flip: true },
    { title: "Packaging & Distribution", img: "/distribution.webp", desc: "We use eco-friendly, airtight packaging to ensure freshness and deliver farm-to-table goodness right to your doorstep.", flip: false },
  ].map((process, index) => (
    <motion.div 
      key={index} 
      variants={fadeIn} 
      className={`flex flex-col md:flex-row ${process.flip ? "md:flex-row-reverse" : ""} items-center gap-10 py-10`}
    >
      {/* Image Section with Adjusted Height */}
      <motion.div variants={process.flip ? slideInRight : slideInLeft} className="md:w-1/2 w-full flex justify-center">
        <Image 
          src={process.img} 
          alt={process.title} 
          width={600}  // Width remains the same
          height={300} // Reduced height
          className="rounded-md shadow-md object-cover w-[600px] h-[300px]"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div variants={process.flip ? slideInLeft : slideInRight} className="md:w-1/2 w-full text-center md:text-left">
        <h3 className="text-2xl font-semibold text-[#69AD6C]">{process.title}</h3>
        <p className="text-gray-700 mt-3">{process.desc}</p>
      </motion.div>
    </motion.div>
  ))}
</motion.div>

      {/* CTA Section */}
      <motion.div variants={fadeIn} className="bg-[#69AD6C] text-white py-12 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-semibold">Experience Farm-Fresh Quality Today!</h2>
        <p className="text-lg mt-2">Join us in bringing nature’s best to your kitchen.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6">
          <Link href="/contact" className="bg-white text-[#69AD6C] px-6 py-3 rounded-md shadow-md text-lg font-semibold">Contact Us</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
