"use client"
import { useRecoilValue } from "recoil"
import { cartState } from "../recoil/atoms/cartAtom"
import DecreaseButton from "./cartButtons/DecreaseButton";
import IncreaseButton from "./cartButtons/IncreaseButton";
import RemoveButton from "./cartButtons/RemoveButton";
import Image from "next/image";
import CartSummary from "./CartSummary";
import ClientWrapper from "./ClientWrapper";

const Cart = () => {
  const cart = useRecoilValue(cartState);

  return (
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {/* logic to display items in the cart */}
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4 p-4 border-b">
            <div className="w-16 h-16 relative">
              <Image 
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className=" text-gray-700 dark:text-gray-300">{item.price}</p>
              <div className="flex items-center mt-2">
                {/* Decreases the item quantity */}
                <DecreaseButton productId={item.id} />
                <span className="mx-4">{item.quantity}</span>
                {/* Increases the item quantity */}
                <IncreaseButton productId={item.id} />
              </div>
            </div>
            <RemoveButton productId={item.id} />
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {/* Displays final price summary */}
      <CartSummary cart={cart}/>
    </div>
  );
};

export default Cart;