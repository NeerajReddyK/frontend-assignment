"use client"

import { useSetRecoilState } from "recoil";
import { cartState } from "@/app/recoil/atoms/cartAtom";

const IncreaseButton = ({ productId }) => {
  const setCart = useSetRecoilState(cartState);

  const handleQuantityIncrease = () => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <button onClick={handleQuantityIncrease} className="px-2 py-1 bg-gray-500">
      +
    </button>
  );
};

export default IncreaseButton;