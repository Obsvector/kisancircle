"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Poppins, Outfit } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const Page = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      className="pt-[5%] w-screen space-y-10"
    >
      {/* Page Title */}
      <motion.div 
        variants={fadeIn} 
        className={`text-4xl font-bold text-[#69AD6C] flex justify-center ${outfit.className}`}
      >
        Products
      </motion.div>

      {/* Product Sections */}
      <div className="py-10 space-y-10">
        {[
          { src: "/Rice.jpeg", title: "Premium Rice", text: "If you're looking for the finest, most authentic rice...", flip: false },
          { src: "/mirchi.jpeg", title: "Premium Mirchi", text: "If you're looking for the freshest, most aromatic mirchi...", flip: true },
          { src: "/corn.jpeg", title: "Premium Corn", text: "If you're looking for the freshest, most naturally sweet corn...", flip: false },
          { src: "/bengal.jpg", title: "Bengal Gram", text: "If you're looking for protein-packed, farm-fresh goodness...", flip: true },
          { src: "/oil.jpg", title: "Pressed Oil", text: "If you're looking for the purest, most natural, and nutrient-rich oil...", flip: false },
        ].map((product, index) => (
          <motion.div 
            key={index} 
            className={`lg:flex md:flex w-[100%] lg:px-20 md:px-10 px-4 gap-20 ${product.flip ? "flex-row-reverse" : ""}`}
            whileInView="visible" 
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }} // Animates only when the section comes into view
          >
            {/* Image Section */}
            <motion.div 
              variants={product.flip ? slideInRight : slideInLeft} 
              className="lg:w-[45%] md:w-[45%]"
            >
              <Image
                src={product.src}
                alt="No Image Found"
                width={500}
                height={500}
                className="w-full h-[400px] rounded-md shadow-md object-cover"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div 
              variants={product.flip ? slideInLeft : slideInRight} 
              className={`lg:w-[50%] md:w-[50%] ${poppins.className} text-[#69AD6C] text-justify flex flex-col justify-center font-medium space-y-4`}
            >
              <p>{product.text} Experience the true taste of nature with KisanCircle&apos;s {product.title}!</p>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="flex justify-center"
              >
                <Link href='/contact' className="text-white bg-[#69AD6C] p-2 rounded-md shadow-md">
                  Know More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Page;
