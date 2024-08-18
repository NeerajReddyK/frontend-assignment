"use client"

import { useSetRecoilState, useRecoilState } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";
import { numberOfItemsInCart } from "../recoil/atoms/numberAtom";
import { motion } from 'framer-motion';
import { cartAnimationState } from "../recoil/atoms/cartAnimationAtom";

const AddToCartButton = ({product}) => {
  const [cart, setCart] = useRecoilState(cartState);
  const setNumberOfItemsInCart = useSetRecoilState(numberOfItemsInCart);
  const [cartAnimationTriggered, setCartAnimationTriggered] = useRecoilState(cartAnimationState);

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if(existingProduct) {
      alert("Product already in cart");
    } else {
      setCart((prevCart) => {
        return [...prevCart, { ...product, quantity: 1}];
      })
      setNumberOfItemsInCart((count) => count + 1);
      setCartAnimationTriggered(false);
      setTimeout(() => {  
        setCartAnimationTriggered(true);
      }, 100);
    }
  };

  return (
    <div className="flex justify-end">
      <motion.button
        whileTap={{ 
          scale: [1, 1.1, 1.1, 1],
          rotate: [0, 360, 360, 0]
        }}
        whileHover={{ scale: 1.1 }}
        
        transition={{duration: 0.5 , ease: "easeInOut"}}
        onClick={handleAddToCart}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
      Add To Cart
    </motion.button>
    </div>
  )
}

export default AddToCartButton;