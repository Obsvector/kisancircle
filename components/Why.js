import React from 'react'
import Image from 'next/image'
import { Poppins, Outfit } from "next/font/google";


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

const Why = () => {
  return (
    <div className="relative w-screen mt-10 lg:h-[60vh] md:h-[40vh] h-[40vh] ">
      
      {/* Background Image */}
      <Image
        src='/why.jpeg'
        alt='no image found'
        width={1920}
        height={1080}
        className='w-full h-full object-cover'
      />

      {/* Text Overlay on Image */}
      <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 space-y-2  ">
        <div className={`text-[#69AD6C] lg:text-4xl text-3xl font-bold  ${outfit.className}`}> Why Choose Us? </div>
        <p className={`lg:w-[50%] md:w-[50%] w-[60%] text-[#69AD6C] lg:text-[16px] md:text-lg text-sm font-semibold ${poppins.className} `}>At KisanCircle, we bring you the freshest, farm-to-table products sourced through ethical and sustainable farming. Our commitment to quality, purity, and authenticity ensures that you get the best grains, spices, and oils, straight from trusted farmers.</p>
      </div>

    </div>
  )
}

export default Why;
