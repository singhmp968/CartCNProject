import React from "react";
// creating react componentt
// the below one is function component
const Navbar=(props)=> {        
        return(
            <div style={styles.nav} >
                <div style={styles.cartIconContainer} >
                    <img style={ styles.cartIcon } src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1637678622~hmac=9623053b67086571c49e463d9c6a946d" alt="cart-icon" />
                    <span style={styles.cartCount} >{props.count}</span>
                </div>
            </div>
        )
    }


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
// exporting default from here
export default Navbar;