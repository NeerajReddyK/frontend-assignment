"use client"
import { cartState } from "@/app/recoil/atoms/cartAtom"
import { useSetRecoilState } from "recoil"

const DecreaseButton = ({ productId }) => {
  const setCart = useSetRecoilState(cartState);

  const handleQuantityDecrease = () => {
    setCart((cart) => 
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1}
          : item
      )
    );
  };

  return (
    <button onClick={handleQuantityDecrease} className="px-2 py-1 bg-gray-500">
      -
    </button>
  );
};

export default DecreaseButton;