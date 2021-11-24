import React from "react";
// here we are importing CartsItems part
//import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from './Navbar';
class App extends React.Component {
  
  // we are moving this to app component as we need to pass the state to the app component an =d via prop we will be sharing the data to sibling of cartimte i.e savbar
    constructor() {
      
        super() // wheneveer we are inheriting anything from another class we first need to call const of the parent class beacause we are usng const()
        this.state = {
          // we are unser state taht consite our product
         products: [ 
            {
                price:199,
                title:'Mobile Phone',
                qty:10,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80',
                id:1
            },
            {
                    price:99,
                    title:'watch',
                    qty:1,
                    img: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                    id:2
            },
            {
                price:99,
                title:'Laptop',
                qty:4,
                img: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 ',
                id:3
            }
               
         ]
        }
    }
//handling increaceQty
    handleIncreaseQuantity=(product)=>{
        console.log('hey please increase the quantity of ',product);
        const { products } = this.state; // gettting the product from the state
        const index = products.indexOf(product);
        products[index].qty +=1;
        this.setState({
            products: products // updating the products to the new products values
            // or we can simpley pass products
        })
    } 

    handleDecreaseQuantity=(product) =>{
        console.log('inside handleing decreaase qty');
        const { products } = this.state; // getting the value of products using this.state
        const index =products.indexOf(product);
        products[index].qty -=1; // decreasing the value by one

        if(products[index].qty <=0){
            products[index].qty =0; 
        }
       
        this.setState({
            products:products
        })
    }

    handleDeleteProduct=(id)=>{
        const { products } = this.state;
        const items = products.filter((item)=> item.id !=id )// this will return [{ whose id is not 'id'}]
        this.setState({
            products:items
        })

    }

    getCartCount=()=>{
      const {products} = this.state;
      console.log('products',products);
      let count = 0;
      products.forEach((product)=>{
        count+=product.qty;
      })
      return count;
    }
    
 getCartTotal=()=>{
   const{ products } = this.state;
   let cartTotal=0; 
   products.map((product)=>{
    cartTotal=cartTotal+product.qty*product.price;
   })
   return cartTotal;
 }


  render(){
    const { products } = this.state; // gettign the products from state
    return (
      <div className="App">
        <h1>Cart</h1>
        {/* using cart items */}
        <Navbar count={this.getCartCount()} />
        <Cart
        // we are passing theis value to cart componenet vaia props 
        products={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity // this is giving the reference to the required function
        }
        onDecreaseQuantity ={this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        func = {() => console.log('sdsa')}
        
        />
        <div style={{padding:10,fontSize:20}} >TOTAL:{this.getCartTotal() }</div>
      </div>
    );
}
}
export default App;
