import React from "react";
// creating react componentt
class CartItem extends React.Component {
    // this method will basically describe the  Ui component that will be rereturn jsx compoennt to our Ui
/*
    constructor() {
      
        super() // wheneveer we are inheriting anything from another class we first need to call const of the parent class beacause we are usng const()
        this.state = {
            price:999,
            title:'phone',
            qty:1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
        //this.testing(); // calling ttesting
    }
    */
    // increaseQuantity() {
    //     console.log('tested');
    //     console.log('y=this',this);
    //     console.log('this.state',this.state); // it will show error as we know value of this will depenfd on how it is being called
    // }
    // ****other solution we can use arrow function
        increaseQuantity=()=> { // arrow function will automatically bind the function with the instace of class CartItem
        console.log('tested');
        console.log('y=this',this);
        console.log('this.state',this.state); // it will show error as we know value of this will depenfd on how it is being called
       /*
        // this is comed from React.Component and we are using it for rendering the ui componet
       // this is setState form 1
        // we can use this method when our required value does ot depend on previous state e.g title
      
        this.setState({ // and here ww want to tell what we need to change in the componenet // this method will only do shallow merging i.e if i want to change the qty it will only change the qty 
            qty:this.state.qty + 1 //  this.state is in constructor
        })
        */
        // here we are calling setState 3 time but setState will render only once and this is happening because of the concept called **batchig
        // Batching->batching means in a event handler no matter how many times you called this.setState react will merge this into one Single setStare and that is why our component is render only once
        // react will going to take up the last call and take the last object mad used for merging
       /* this.setState({ // and here ww want to tell what we need to change in the componenet // this method will only do shallow merging i.e if i want to change the qty it will only change the qty 
            qty:this.state.qty + 5 //  this.state is in constructor
        })
        this.setState({ // and here ww want to tell what we need to change in the componenet // this method will only do shallow merging i.e if i want to change the qty it will only change the qty 
            qty:this.state.qty + 1 //  this.state is in constructor
        })
        *
        
        /**set state form 2 */
        // we can use this method when our required value depend on previous state e. qty
        this.setState((prevState)=> { //  here we are passing the previous state
            return {
                qty: prevState.qty + 1
            }
        },() =>{
            console.log('inside call back',this.state)
        }) // inoreder to solve this we have if we want to perform some action after update is happen we can follow this metod 
        // our setState call is async
    console.log(this.state) // check the ui and console value ui=2, c.log 1 there for react provide a method  when we are calling this.state we cannot relay on this.setState
        /*
        // here in 2 method the value will is increasing by 3
        // in second method it is basically maintaning a queue anit is passing the callback at the queue and react will make sure that the previous state will be update while callint the next this.SetSttate
        // we can use this method when our required value depend on previous state e. qty
        this.setState((prevState)=> { //  here we are passing the previous state
            return {
                qty: prevState.qty + 1
            }
        },()=> {
             // here also we can to the same as we have done for passing the call back
        })
        // we can use this method when our required value depend on previous state e. qty
        this.setState((prevState)=> { //  here we are passing the previous state
            return {
                qty: prevState.qty + 1
            }
        })
    
    */

// 
    
    }


    
    decreaseQuantity=()=> {
        console.log('this',this);
        const { qty } = this.state // destructuring 
       this.setState((prevState)=>{
           if(prevState.qty >0 ){
           return {
               qty:prevState.qty-1
           }
        }else if(prevState.qty==1 ){
            
                return {
                    qty:1
                }
        }
       })

    }


// batching will not always occour in some cases like promis and ajax call
/*testing () {
    const promise = new Promise((resolve,reject)=>{
       
        setTimeout(() => {
            resolve('done')
        },5000)
        
    })
    promise.then(() => {
        // in promie setState act like sync call
        //this.setState({qty: 100});
        this.setState({qty: this.state.qty + 10});
        this.setState({qty: this.state.qty + 10});        
        this.setState({qty: this.state.qty + 10});
         //o/p will be 30 all three will get adds up
        console.log('state',this.state);
    }); 
}
*/


    render() {
        console.log('this.prop',this.props) // we will recive props values here

        // object destruction
        //const {price,title,qty} = this.state;
        const {price,title,qty} = this.props.product;
        
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    {/* <div style={{ fontSize: 25 }} >{this.state.title}</div> */}
                    <div style={{ fontSize: 25 }} >{title}</div>

                    {/* <div style={{ color:'#777' }} >{this.state.price}</div> */}
                    <div style={{ color:'#777' }} >Rs: {price}</div>
                   
                    {/* <div style={{ color:'#777' }} >{this.state.qty}</div> */}
                    <div style={{ color:'#777' }} >qty: {qty}</div>
                    
                    <div className="cart-item-actions">
                        {/* here inside this we can write any javascriptn expression */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1637299825~hmac=ec99e8aadfdaa2dbabc1bbca2b7c6b1d"
                            //onClick = {this.increaseQuantity.bind(this)} //this is one way we can also bing=d in constructor also. we are binding instance with this ?? need to understand clearly 
                            onClick = {this.increaseQuantity} // by doing this we acan bind b=using constructor
                            />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" 
                            onClick = {this.decreaseQuantity}
                            />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1637299881~hmac=0d91ca66e7b6a485e3955e17cf1bcf64" />

                    </div>

                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4, // we have to use camel case  we can't use border-radius
        background: '#ccc'
    }
}
// exporting default from here
export default CartItem;