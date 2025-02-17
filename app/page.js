"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Poppins, Outfit } from "next/font/google";
import Welcome from "@/components/Welcome";
import Products from "@/components/Products";
import Why from "@/components/Why";
import { useRouter } from "next/navigation";

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

const slides = [
  {
    image: "/HeroMirchi.jpg",
    text: "Empowering farmers is at the heart of our mission, and our actions will always align with their perspective",
  },
  {
    image: "/Herofields.jpg",
    text: "From our farm to your home—fresh, local, and delivered with care!",
  },
  {
    image: "/HeroRice.jpg",
    text: "Not Just Another Organic Company—We're Committed to Freshness, Sustainability, and a Healthier Future",
  },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div className="min-h-screen">
      {/* Image Slider */}
      <div className="relative w-screen h-[50vh] overflow-hidden">
        <Image
          src={slides[currentIndex].image}
          alt="Slider Image"
          width={1920}
          height={1080}
          className="w-screen h-[50vh] object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold max-w-3xl">
            {slides[currentIndex].text}
          </p>
          <button
            className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white text-lg font-medium rounded-lg transition"
            onClick={() => router.push("/contact")}
          >
            Buy Now
          </button>
        </div>
      </div>

      <Welcome />
      <Products />
      <Why />
    </div>
  );
};

export default Page;
