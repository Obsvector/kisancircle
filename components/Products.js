import Image from 'next/image'
import React from 'react'
import { Poppins, Outfit } from "next/font/google";
import Link from 'next/link';

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

// Product List (Each item has a unique image, title, and description)
const products = [
  {
    id: 1,
    title: "Rice",
    image: "/Rice.jpeg",
    description: "A staple grain rich in nutrients, offering purity, taste, and nourishment in every bite.",
  },
  {
    id: 2,
    title: "Corn",
    image: "/corn.jpeg",
    description: "Naturally grown corn, packed with essential vitamins and a rich, crunchy taste.",
  },
  {
    id: 3,
    title: "Red Chilli",
    image: "/mirchi.jpeg",
    description: "Premium quality red chilli with a fiery taste, enhancing the flavor of every dish.",
  },
  {
    id: 4,
    title: "Pressed Oil",
    image: "/oil.jpg",
    description: "Cold-pressed oil, pure and healthy, preserving all the natural nutrients.",
  },
];

const Products = () => {
  return (
    <div className="flex flex-wrap  justify-center lg:justify-between gap-10 lg:px-40 md:px-10 px-4 lg:mt-[10%] md:mt-[15%] mt-[25%] lg:space-y-0 md:space-y-0 space-y-32">
      
      {products.map((product) => (
        <div key={product.id} className="relative w-[250px] h-[250px] md:mb-32 flex items-center justify-center">
          
          {/* Square Background */}
          <div className="absolute w-[250px] h-[280px] bg-[#D8F3DC] z-40 rounded-md shadow-md flex flex-col items-center pt-[40%] space-y-3">
            <p className={`text-md text-gray-800 font-semibold ${outfit.className}`}>{product.title}</p>
            <p className={`flex justify-center text-sm text-center px-2 ${poppins.className}`}>
              {product.description}
            </p>
            <div className="bg-[#69AD6C] text-white font-bold text-sm p-2 rounded-md">
              <Link href='/products'>Know More</Link>
            </div>
          </div>

          {/* Circular Image (On Top of Square) */}
          <div className="absolute z-40 -top-1/2">
            <Image
              src={product.image}
              alt={`${product.title} image`}
              width={500}
              height={500}
              className="w-[200px] h-[200px] shadow-md rounded-full"
            />
          </div>
          
        </div>
      ))}
      
    </div>
  )
}

export default Products;
