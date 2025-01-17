import { useState, createContext } from "react";
import Main from "./components/main";
import Cart from "./components/cart";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [itemAmounts, setItemAmounts] = useState({});
  return (
    <cartContext.Provider value={{cart,setCart,itemAmounts,setItemAmounts}}>
    <div className="App flex gap-3 p-10">
      <Main />
      <Cart />
    </div>
    </cartContext.Provider>
  );
}

export default App;
