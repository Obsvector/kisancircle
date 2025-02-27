import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { Poppins, Outfit } from "next/font/google";

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

const Footer = () => {
  return (
    <footer className="bg-[#69AD6C] text-white font-semibold py-10">
      <div className="mx-auto px-6 lg:px-10 max-w-7xl">
        
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
          
          {/* Brand Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="w-40">
              <Image
                src="/Logo.png"
                alt="No Logo Found"
                width={500}
                height={500}
                className="h-32 w-80"
              />
            </div>
            <p className={`mt-2 text-sm ${poppins.className}`}>
              Bringing you fresh, farm-to-table products with authenticity and quality.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3">
            <h3 className={`text-lg font-semibold ${outfit.className}`}>Quick Links</h3>
            <div className="flex flex-col space-y-2 mt-2">
              <Link href="/" className={`hover:underline ${poppins.className}`}>Home</Link>
              <Link href="/products" className={`hover:underline ${poppins.className}`}>Products</Link>
              <Link href="/contact" className={`hover:underline ${poppins.className}`}>Contact</Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3">
            <h3 className={`text-lg font-semibold ${outfit.className}`}>Contact Us</h3>
            <div className="mt-2 space-y-1">
              <p className={`text-sm ${poppins.className}`}>📍 Guntur, India</p>
              <p className={`text-sm ${poppins.className}`}>📞 +91 9866202130</p>
              <p className={`text-sm ${poppins.className}`}>✉️ Circlekisan@gmail.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="hover:opacity-80"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:opacity-80"><FaInstagram size={20} /></a>
              <a href="#" className="hover:opacity-80"><FaTwitter size={20} /></a>
              <a href="#" className="hover:opacity-80"><FaLinkedinIn size={20} /></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 flex flex-col md:flex-row justify-center md:justify-between mt-8 pt-4 text-center text-sm">
          <div className={poppins.className}>© {new Date().getFullYear()} KisanCircle. All rights reserved.</div>
          <div>
            <Link href="https://www.obsvector.com" className={poppins.className}>
              Designed and Developed by ObsVector Private Limited
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
