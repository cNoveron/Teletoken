import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="#body">Home</a></li>
              <li><a href="#track">Seguir donativo</a></li>
              <li><a href="https://www.teleton.org/" target="_blank" rel="noopener noreferrer">Donar</a></li>
            </ul>
          </nav>
        );
    }
}
export default Menu
