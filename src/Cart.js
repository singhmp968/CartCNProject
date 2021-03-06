import React from "react";
// creating react componentt
import CartItem from "./CartItem";
//class Cart extends React.Component {
 
// converting into function component
const Cart=(props)=>{ // passing props at the runtime
    
// this method will basically describe the  Ui component that will be rereturn jsx compoennt to our Ui
// we are moving this to app component as we need to pass the state to the app component an =d via prop we will be sharing the data to sibling of cartimte i.e savbar
//     constructor() {
      
//         super() // wheneveer we are inheriting anything from another class we first need to call const of the parent class beacause we are usng const()
//         this.state = {
//          products: [
//             {
//                 price:199,
//                 title:'Mobile Phone',
//                 qty:10,
//                 img: '',
//                 id:1
//             },
//             {
//                     price:99,
//                     title:'watch',
//                     qty:1,
//                     img: '',
//                     id:2
//             },
//             {
//                 price:99,
//                 title:'Laptop',
//                 qty:4,
//                 img: '',
//                 id:3
//             }
               
//          ]
//         }
//     }
// //handling increaceQty
//     handleIncreaseQuantity=(product)=>{
//         console.log('hey please increase the quantity of ',product);
//         const { products } = this.state; // gettting the product from the state
//         const index = products.indexOf(product);
//         products[index].qty +=1;
//         this.setState({
//             products: products // updating the products to the new products values
//             // or we can simpley pass products
//         })
//     } 

//     handleDecreaseQuantity=(product) =>{
//         console.log('inside handleing decreaase qty');
//         const { products } = this.state; // getting the value of products using this.state
//         const index =products.indexOf(product);
//         products[index].qty -=1; // decreasing the value by one

//         if(products[index].qty <=0){
//             products[index].qty =0; 
//         }
       
//         this.setState({
//             products:products
//         })
//     }

//     handleDeleteProduct=(id)=>{
//         const { products } = this.state;
//         const items = products.filter((item)=> item.id !=id )// this will return [{ whose id is not 'id'}]
//         this.setState({
//             products:items
//         })

//     }

   // render(){
       // const arr= [1,2,3,4,5]
       // destructruing this.state
       // *** here we are passing the data from parents to children using prop
       // Cart is parent and CartItem is children
       const { products } = props
        return(
            
        <div className="cart">
            
            {products.map((product)=> {
                // here we are passing product by looping over the array
                //react doesnot hoe to differentiates between different component that why we have to pass key  it is for internal react purpose
                return <CartItem 
                product={product}
                key={product.id}
                onIncreaseQuantity = {props.onIncreaseQuantity // this is giving the reference to the required function
                }
                onDecreaseQuantity ={props.onDecreaseQuantity}
                onDeleteProduct = {props.onDeleteProduct}
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
    //}
}
export default Cart;