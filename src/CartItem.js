import React from "react";
// creating react componentt
class CartItem extends React.Component {
    // this method will basically describe the  Ui component that will be rereturn jsx compoennt to our Ui

    constructor() {
        super() // wheneveer we are inheriting anything from another class we first need to call const of the parent class beacause we are usng const()
        this.state = {
            price:999,
            title:'phone',
            qty:1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
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

    }
    render() {
        // object destruction
        const {price,title,qty} = this.state;
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