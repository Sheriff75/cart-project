import { useEffect, useState, useContext } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { cartContext } from "../App";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const { cart, setCart, itemAmounts, setItemAmounts } =
    useContext(cartContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/data.json");
      setData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updatedCart = data
      .map((item, index) => {
        return { ...item, quantity: itemAmounts[index] || 0 };
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }, [itemAmounts, data, setCart]);

  console.log(cart);
  const handleAddToCart = (index) => {
    setItemAmounts((prevAmounts) => ({
      ...prevAmounts,
      [index]: (prevAmounts[index] || 0) + 1,
    }));
  };

  const handleIncrement = (index) => {
    setItemAmounts((prevAmounts) => ({
      ...prevAmounts,
      [index]: prevAmounts[index] + 1,
    }));
  };

  const handleDecrement = (index) => {
    setItemAmounts((prevAmounts) => {
      const newAmount = prevAmounts[index] - 1;
      return {
        ...prevAmounts,
        [index]: newAmount > 0 ? newAmount : 0, // Don't go below 0
      };
    });
  };
  return (
    <div className="h-fit w-[78%] border p-5">
      <h1 className="font-extrabold text-2xl">Desserts</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.map((item, index) => {
          const amount = itemAmounts[index] || 0;
          const showButtons = amount > 0;

          return (
            <div key={index} className="p-5">
              <div className="relative mb-[-20px]">
                <img src={item.image.desktop} alt="" />
                <span
                  className="flex relative justify-between bottom-6 m-auto text-xl
 bg-white items-center p-2 px-2 gap-4 rounded-3xl border w-fit"
                >
                  {!showButtons ? (
                    <span
                      className="flex items-center gap-2 text-2xl cursor-pointer"
                      onClick={() => handleAddToCart(index)}
                    >
                      <GiShoppingCart />{" "}
                      <h1 className="text-lg font-bold">Add to Cart </h1>
                    </span>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handleDecrement(index);
                        }}
                        className="text-[#bb3f1a] font-bold text-2xl"
                      >
                        <CiCircleMinus />
                      </button>
                      <span className="text-xl font-semibold">{amount}</span>
                      <button
                        onClick={() => {
                          handleIncrement(index);
                        }}
                        className="text-[#bb3f1a] font-bold text-2xl"
                      >
                        <CiCirclePlus />
                      </button>
                    </>
                  )}
                </span>
              </div>
              <p>{item.category}</p>
              <h1>{item.name}</h1>
              <p className=" text-[#bb3f1a] font-extrabold">
                ${item.price.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
