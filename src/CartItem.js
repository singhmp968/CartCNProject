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
                        <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1637299825~hmac=ec99e8aadfdaa2dbabc1bbca2b7c6b1d" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1637299881~hmac=0d91ca66e7b6a485e3955e17cf1bcf64" />

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