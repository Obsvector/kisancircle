import React from 'react'
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

const Welcome = () => {
  return (
    <div className='py-10 space-y-4'>
        <div className={`lg:text-5xl  text-3xl font-bold text-[#308634] flex justify-center text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] ${outfit.className}`}>
  Welcome to Kisancircle
</div>
<p className={`lg:px-40 md:px-10 font-medium px-4 text-[#308634] lg:text-[20px] md:text-[16px] text-[14px] ${poppins.className}`}>Discover the finest Rice, Corn, Red Chilli, Bengal Gram, and Pressed Oil with KisanCircle, where quality meets tradition. Sourced responsibly, our products offer authentic flavor and superior freshness in every bite. Taste the purity of farm-fresh goodness! </p>

    </div>
  )
}

export default Welcome