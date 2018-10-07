import React, { Component } from 'react';
import Track from '../components/Track'
import Info from '../components/Info'

class MainContent extends Component {
    render() {
        return (
            <div id="main">
                <Track />
                <Info />
            </div>
        );
    }
}
export default MainContent;
