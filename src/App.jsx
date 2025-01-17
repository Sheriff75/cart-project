import { useState, createContext } from "react";
import Main from "./components/main";
import Cart from "./components/cart";


function App() {
  const cartContext = createContext();
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart,setCart}}>
    <div className="App flex gap-3 p-10">
      <Main />
      <Cart />
    </div>
    </cartContext.Provider>
  );
}

export default App;
