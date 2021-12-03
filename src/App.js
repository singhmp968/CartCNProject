import React from "react";
// here we are importing CartsItems part
//import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from './Navbar';
import * as firebase from 'firebase'; // importing firebase
class App extends React.Component {
  
  // we are moving this to app component as we need to pass the state to the app component an =d via prop we will be sharing the data to sibling of cartimte i.e savbar
    constructor() {
      
        super() // wheneveer we are inheriting anything from another class we first need to call const of the parent class beacause we are usng const()
        this.state = {
          // we are unser state taht consite our product
         products: [],
         loading:true


            // {
            //     price:199,
            //     title:'Mobile Phone',
            //     qty:10,
            //     img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80',
            //     id:1
            // },
            // {
            //         price:99,
            //         title:'watch',
            //         qty:1,
            //         img: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            //         id:2
            // },
            // {
            //     price:99,
            //     title:'Laptop',
            //     qty:4,
            //     img: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 ',
            //     id:3
            // }
               
         //]
        }
        this.db = firebase.firestore() // creating firestore
    }

    componentDidMount(){ // usinng componentDidMount() for calling the data from fire base just after our componenet is mounted 
      // here we are chaning our method
      // firebase
      // .firestore()
      // .collection('products')
      // .get() // this get method will return me a promise and it will give QuerySnapshot;
      // .then((snapshot) => { // using it beacause we are using get() here
      //   console.log(snapshot);
      //   snapshot.docs.map((doc)=> {
      //       console.log(doc.data()); // gettingthe data
      //   });
      //   // storing in the products
      //   const products = snapshot.docs.map((doc) => {
      //     const data = doc.data();
      //     data['id'] = doc.id;// creating id in data and passing doc.id value
      //     return data;
      //   })
      //   this.setState({
      //     //products:products
      //     // or we can uss short hand
      //     products,
      //     loading:false //when produst will displayed
      //   })

      //  }) 
  
      
      // firebase
      // .firestore()
     this.db // this is definr @ constructor
      .collection('products')
      // .where('price','==',999)
      // .where('title','==','mobile phone')
      .orderBy('price','asc') // sorting the data by price
      .onSnapshot((snapshot) => { // this will attached a lsitner to the queryattechedListner
  
        // using it beacause we are using get() here
          console.log(snapshot);
          snapshot.docs.map((doc)=> {
              console.log(doc.data()); // gettingthe data
          });
          // storing in the products
          const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;// creating id in data and passing doc.id value
            return data;
          })
          this.setState({
            //products:products
            // or we can uss short hand
            products,
            loading:false //when produst will displayed
          })
        
        }) 
  
    }
//handling increaceQty
    handleIncreaseQuantity=(product)=>{
        console.log('hey please increase the quantity of ',product);
        const { products } = this.state; // gettting the product from the state
        const index = products.indexOf(product);
        // old code
        /*products[index].qty +=1;
        this.setState({
            products: products // updating the products to the new products values
            // or we can simpley pass products
        })
        */
       // getting current value
       const docRef = this.db.collection('products').doc(products[index].id);
       docRef
       .update({
         qty:products[index].qty + 1 // increasing the current product quantity
       })
       .then(() => {
         console.log('Updated Success fully');
       })
       .catch((error)=>{
         console.log('error',error);
       })
    } 

    handleDecreaseQuantity=(product) =>{
        console.log('inside handleing decreaase qty');
        const { products } = this.state; // getting the value of products using this.state
        const index =products.indexOf(product);
        if(products[index].qty === 0) {
          return;
        }
        const docRef = this.db.collection('products').doc(products[index].id);
        docRef
        .update({
          qty:products[index].qty-1
        })
        .then(()=>{
          console.log('updated successfully');
        })
        .catch((error) => {
          console.log('erroe:',error);
        })
        /*
        products[index].qty -=1; // decreasing the value by one

        if(products[index].qty <=0){
            products[index].qty =0; 
        }
       
        this.setState({
            products:products
        })
        */
    }

    handleDeleteProduct=(id)=>{
        const { products } = this.state;
        // const items = products.filter((item)=> item.id !=id )// this will return [{ whose id is not 'id'}]
        // this.setState({
        //     products:items
        // })

        const docRef = this.db.collection('products').doc(id); //passing just id only
        docRef
        .delete()
        .then(()=>{
          console.log('deleted successfully');
        })
        .catch((error) => {
          console.log('erroe:',error);
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
     if(product.qty > 0) {
    cartTotal=cartTotal+product.qty*product.price;
     }
     return '';
   })
   return cartTotal;
 }

 addProduct=()=>{
  // firebase.firestore
  this.db
  .collection('products')
  .add({ //this will add the data into firebase this will return a promise and it will return a document refernce
    img:'',
    price:900,
    qty:3,
    title:'washing machine'
  })
  .then((docRef)=> {
    console.log('product has been added',docRef)
  })
  .catch((err) =>{
    console.log('erroe',err)
  })
}

  render(){
    const { products,loading } = this.state; // gettign the products from state
    return (
      <div className="App">
        <h1>Cart</h1>
        {/* using cart items */}
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding:20,fontSize:20}} >Add a product</button> */}
        <Cart
        // we are passing theis value to cart componenet vaia props 
        products={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity // this is giving the reference to the required function
        }
        onDecreaseQuantity ={this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        func = {() => console.log('sdsa')}
        
        />
        {loading && <h1>Loading products</h1>}
        <div style={{padding:10,fontSize:20}} >TOTAL:{this.getCartTotal() }</div>
      </div>
    );
}
}
export default App;
