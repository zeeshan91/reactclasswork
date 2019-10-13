import React, { Component } from 'react';

export default class Checkout extends Component {
    constructor(props){
        super(props)
  }


  render() {
 console.log(this.props.cartItem)
    
  /* var cartTotalPrice = this.props.cartItem.map(( citem , index ) => {
        return <div key={index}>
            {citem.price} <br />
        </div>
         });

*/
       return (
      <div> 
        <h2>Checkout</h2>       

        {/* {cartTotalPrice} */}
   


    </div>
    );
  }
}
