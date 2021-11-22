import React from "react";
// here we are importing CartsItems part
import CartItem from "./CartItem";
import Cart from "./Cart";
function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
      {/* using cart items */}
      <Cart />
    </div>
  );
}

export default App;
