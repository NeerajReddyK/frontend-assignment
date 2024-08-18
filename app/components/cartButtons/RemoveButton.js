"use client"

import { cartState } from "@/app/recoil/atoms/cartAtom";
import { numberOfItemsInCart } from "@/app/recoil/atoms/numberAtom";
import { useSetRecoilState } from "recoil";

const RemoveButton = ({ productId }) => {
  const setCart = useSetRecoilState(cartState);
  const setNumberOfItemsInCart = useSetRecoilState(numberOfItemsInCart);

  const handleRemoveItem = () => {
    setCart((cart) => cart.filter((item) => item.id !== productId));
    setNumberOfItemsInCart(count => count - 1);
  };

  return (
    <button onClick={handleRemoveItem} className="px-2 py-1 bg-red-500 text-white rounded-md">
      Remove
    </button>
  );
};

export default RemoveButton;