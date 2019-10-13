import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route,browserHistory} from 'react-router';

import AddProduct from './components/dashboard/AddProduct';
import Shop from './components/Shop';
import Checkout from './components/Checkout'; 


  ReactDOM.render(
        <Router history= {browserHistory}>
           <Route path="/" component={App}></Route>
           <Route path="/AddProduct" component={AddProduct}></Route>
           <Route path="/Shop" component={Shop}></Route>
           <Route path="/Checkout" component={Checkout}></Route>  
         </Router>
    
    , document.getElementById('root'));


//ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
