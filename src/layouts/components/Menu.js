import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="#body">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        );
    }
}
export default Menu
