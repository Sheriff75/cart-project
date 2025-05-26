import { useState, createContext } from "react";
import Main from "./components/main";
import Cart from "./components/cart";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [itemAmounts, setItemAmounts] = useState({});
  return (
    <cartContext.Provider value={{cart,setCart,itemAmounts,setItemAmounts}}>
    <div className="App flex md:gap-3 p-10 pl-0 md:pl-10 pr-0 md:pr-10">
      <Main />
      <Cart />
    </div>
    </cartContext.Provider>
  );
}

export default App;
