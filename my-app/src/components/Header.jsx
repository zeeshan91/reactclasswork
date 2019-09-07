import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
    
<header className="cursor-light">

<nav className="navbar navbar-top-default navbar-expand-lg navbar-gradient nav-icon">
    <div className="container">
        <a href="javascript:void(0)" title="Logo" className="logo link scroll">
            <img src="http://themesindustry.com/html/wexim-2019/images/logo-white.png" alt="logo" className="logo-dark default" />
        </a>

        <div className="collapse navbar-collapse" id="wexim">
            <div className="navbar-nav ml-auto">
                    <a className="nav-link link scroll" href="#home">Home</a>
                    <a className="nav-link link scroll" href="#about">About</a>
                    <a className="nav-link link scroll" href="#team">Team</a>
                    <a className="nav-link link scroll" href="#portfolio">Work</a>
                    <a className="nav-link link scroll" href="#price">Pricing</a>
                    <a className="nav-link link scroll" href="#blog">Blog</a>
                    <a className="nav-link link scroll" href="#contact">Contact</a>
                <span className="menu-line"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
            </div>
        </div>
 
        <a href="javascript:void(0)" className="d-inline-block parallax-btn sidemenu_btn" id="sidemenu_toggle">
            <div className="animated-wrap sidemenu_btn_inner">
            <div className="animated-element">
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            </div>
        </a>

    </div>
</nav>
 

<div className="side-menu">
    <div className="inner-wrapper">
        <span className="btn-close link" id="btn_sideNavClose"></span>
        <nav className="side-nav w-100">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link link scroll" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link scroll" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link scroll" href="#team">Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link scroll" href="#portfolio">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link scroll" href="#price">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link scroll" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link scroll" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>

        <div className="side-footer text-white w-100">
            <ul className="social-icons-simple">
                <li className="animated-wrap"><a className="animated-element" href="javascript:void(0)"><i className="fa fa-facebook"></i> </a> </li>
                <li className="animated-wrap"><a className="animated-element" href="javascript:void(0)"><i className="fa fa-instagram"></i> </a> </li>
                <li className="animated-wrap"><a className="animated-element" href="javascript:void(0)"><i className="fa fa-twitter"></i> </a> </li>
            </ul>
            <p className="text-white">&copy; 2019 Wexim. Made With Love by Themesindustry</p>
        </div>
    </div>
</div>
<a id="close_side_menu" href="javascript:void(0);"></a>


</header>




    );
  }
}
