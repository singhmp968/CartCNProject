import React from "react";
// creating react componentt
import CartItem from "./CartItem";
class Cart extends React.Component {
    // this method will basically describe the  Ui component that will be rereturn jsx compoennt to our Ui

    render(){
        return(
            <div className="cart">
            CART
            <CartItem />
            <CartItem />
            <CartItem />

            </div>
            
        );
    }
}
export default Cart;