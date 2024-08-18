
const CartSummary = ({ cart }) => {

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // Fixed discount of $2 for every $50 worth of items
  const fixedDiscount = Math.floor(subtotal / 50) * 2;
  // if subtotal is greater than $500, then 10% discount, else 5%.
  const percentageDiscount = subtotal > 500 ? subtotal * 0.1 : subtotal * 0.05;
  const totalDiscount = fixedDiscount + percentageDiscount;
  const finalPrice = subtotal - totalDiscount;

  return (
    <div className="p-4 border-t border-gray-200">
      <h2 className="text-xl font-semibold">Cart Summary</h2>
      <div className="mt-2">
        <div className="flex justify-between">
          <span>Subtotal: </span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Fixed Discount: </span>
          <span>-${fixedDiscount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Percentage Discount: </span>
          <span>-${percentageDiscount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2 font-bold">
          <span>Total Price:</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;