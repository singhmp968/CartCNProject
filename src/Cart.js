import React from "react";
// creating react componentt
import CartItem from "./CartItem";
class Cart extends React.Component {
    // this method will basically describe the  Ui component that will be rereturn jsx compoennt to our Ui

    constructor() {
      
        super() // wheneveer we are inheriting anything from another class we first need to call const of the parent class beacause we are usng const()
        this.state = {
         products: [
            {
                price:199,
                title:'Mobile Phone',
                qty:10,
                img: '',
                id:1
            },
            {
                    price:99,
                    title:'watch',
                    qty:1,
                    img: '',
                    id:2
            },
            {
                price:99,
                title:'Laptop',
                qty:4,
                img: '',
                id:3
            }
               
         ]
        }
    }

    render(){
       // const arr= [1,2,3,4,5]
       // destructruing this.state
       // *** here we are passing the data from parents to children using prop
       // Cart is parent and CartItem is children
       const { products } = this.state
        return(
            
        <div className="cart">
            
            {products.map((product)=> {
                // here we are passing product by looping over the array
                //react doesnot hoe to differentiates between different component that why we have to pass key  it is for internal react purpose
                return <CartItem 
                product={product}
                key={product.id}
                func = {() => console.log('sdsa')}
                isloggedin = {false}
                jsx={<h1>Test</h1>}
                comp={<CartItem />} 
            
                />
            }) }
            {/* here we can pass any expression */}
            { //arr
            /*
            // looping in list of items
                arr.map((item)=>{ // keys are given to identigy unique in the elementsnpm
                    return item + 5
                }) */}
            </div>
            
        );
    }
}
export default Cart;