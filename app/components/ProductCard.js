"use client"
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion'
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <section>
      <motion.div 
        className="border p-4 m-1 rounded-lg shadow-md hover:shadow-lg  transition-shadow duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex items-center justify-center">
          <Image 
            src={product.image}
            alt={product.title}
            height={200}
            width={200}
            className=" w-fit h-48 object-cover mb-4 rounded-md"
          />
        </div>
        <div className="relative group hover:cursor-context-menu">
          <h2 className="">
            {product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}
          </h2>
          {/* Tooltip, displays complete title*/}
          <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max">
            {product.title}
          </div>
        </div>
        <div className="flex justify-between">
          <p className="pt-2">{formattedPrice}</p>
          <AddToCartButton product={product}/>
        </div>
      </motion.div>
    </section>
  )
}

export default ProductCard;