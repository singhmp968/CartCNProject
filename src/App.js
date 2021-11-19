import React from "react";
// here we are importing CartsItems part
import CartItem from "./CartItem";
function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
      {/* using cart items */}
      <CartItem />
    </div>
  );
}

export default App;
