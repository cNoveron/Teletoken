import React, { Component } from 'react';

import Menu from './Menu';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <h1><a href="#body" className="scrollto">Teleton</a></h1>
                        {/*<a href="#body"><img src="img/logo.png" alt="" title="" /></a>*/}
                    </div>
                    <Menu />
                </div>
            </header>
        );
    }
}
export default Header;
