import { cartContext } from "../App";
import { useContext } from "react";

const Cart = () => {
  const {
    cart,
  } = useContext(cartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  return (
    <div className="bg-white p-5 h-fit w-[30%] rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-[#bb3f1a]">Cart({cart.length})</h1>
      {cart.map((item, index) => {
        return (
          <div key={index} className="p-2 border-b-2">
            <h1>{item.name}</h1>
            <span className="flex justify-between">

              <h1>${(item.price).toFixed(2)}</h1>
              <h1>x{item.quantity}</h1>
            </span>
          </div>
        );
      })}
      <div className="py-4 pt-1 text-xl flex border-t-2 justify-between font-bold text-[#bb3f1a]">
        <h1>Order Total</h1>
        <p>${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
