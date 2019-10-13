import React, { Component } from 'react';
import AddProduct from './dashboard/AddProduct';
import Shop from './Shop';
import Checkout from './Checkout'; 
import { Router, Route,browserHistory , Link} from 'react-router';


export default class Menu extends Component {
    constructor(props){
        super(props)
    }

    render() { 
    return (

<div> 
           <h1>Ecommerce App</h1> 
 
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addproduct">Add Product</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>

        </ul>

      </div>
    );
  }
}

