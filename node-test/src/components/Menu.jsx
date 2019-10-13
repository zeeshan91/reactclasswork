import React, { Component } from 'react';
import Home from './Home';
import AboutUs from './About';
import Services from './Services';
import Registration from './Registration';
import SignIn from './SignIn';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div> 
          <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">AboutUs</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/signin">SignIn</Link></li>
                        <Route exact path="/" component={Home} />
                        <Route path="/about-us/" component={AboutUs} />
                        <Route path="/services/" component={Services} />
                        <Route path="/register/" component={Registration} />
                        <Route path="/signin/" component={SignIn} />
                    </ul>

                </div>

          </Router>

      </div>
    );
  }
}
export default Menu;
