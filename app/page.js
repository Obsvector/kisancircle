"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Poppins, Outfit } from "next/font/google";
import Welcome from "@/components/Welcome";
import Products from "@/components/Products";
import Why from "@/components/Why";


const poppins = Poppins({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
  });


const images = ["/HeroMirchi.jpg", "/Herofields.jpg", "/HeroRice.jpg"]; // Add your images here

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div className="min-h-screen">
      {/* Image Slider */}
      <div className="w-screen h-[50vh] relative">
        <Image
          src={images[currentIndex]}
          alt="Slider Image"
          width={1920}
          height={1080}
          className="w-screen h-[50vh] object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>
    
      <Welcome />
      <Products />
      <Why />
    </div>
  );
};

export default Page;
