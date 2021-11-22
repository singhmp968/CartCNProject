import React from "react";
// creating react componentt
import CartItem from "./CartItem";
class Cart extends React.Component {
    // this method will basically describe the  Ui component that will be rereturn jsx compoennt to our Ui

    render(){
        const arr= [1,2,3,4,5]
        return(
            <div className="cart">
            CART
            {/* <CartItem /> */}
            {/* here we can pass any expression */}
            { //arr
            // looping in list of items
                arr.map((item)=>{
                    return item + 5
                })}
            </div>
            
        );
    }
}
export default Cart;