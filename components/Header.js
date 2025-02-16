"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Outfit } from 'next/font/google'
import { FcMenu } from "react-icons/fc";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";
import { useState } from 'react'



const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
  });

const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='w-screen bg-white z-50 flex justify-between fixed py-4 lg:px-20 md:px-10 px-4'>
        <div>
            <Image
            src='/Logo.jpeg'
            alt='No Image Found'
            width={500}
            height={500}
            className='w-40' />
        </div>
        <div>
            <ul className={`lg:flex md:flex hidden space-x-10 ${outfit.className} font-bold `}>
                <li className={`${pathname === "/" ? "text-[#308634]" : "text-[#0e3410]"} text-[18px]`}><Link href='/'>Home</Link></li>
                <li className={`${pathname === "/products" ? "text-[#308634]" : "text-[#0e3410]"} text-[18px]`}><Link href='/products'>Products</Link></li>
                <li className={`${pathname === "/whyus" ? "text-[#308634]" : "text-[#0e3410]"} text-[18px]`}><Link href='/about'>Why Choose Us</Link></li>
                <li className={`${pathname === "/contact" ? "text-[#308634]" : "text-[#0e3410]"} text-[18px]`}><Link href='/contact'>Contact Us</Link></li>
            </ul>
        </div>

        <div className='lg:hidden md:hidden '>
        {menuOpen ? (
          <FiX size={30} className="text-[#308634]" onClick={() => setMenuOpen(false)} />
        ) : (
          <FcMenu size={30} className="text-[#308634]" onClick={() => setMenuOpen(true)} />
        )}

        </div>
        {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#D8F3DC] text-white p-5 flex flex-col space-y-4 items-center lg:hidden">
                <ul className={` ${outfit.className} font-bold space-y-2`}>
                <li className={`${pathname === "/" ? "text-[#308634]" : "text-[#0e3410]"} text-[18px]`}><Link href='/'>Home</Link></li>
                <li className={`${pathname === "/products" ? "text-[#308634]" : "text-[#0e3410]"} text-[18px]`}><Link href='/products'>Products</Link></li>
                <li className={`${pathname === "/Whyus" ? "text-[#308634]" : "text-[#0e3410]"} text-[18px]`}><Link href='/about'>Why Choose Us</Link></li>
                <li className={`${pathname === "/contact" ? "text-[#308634]" : "text-[#0e3410]"} text-[18px]`}><Link href='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Header