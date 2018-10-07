import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <section id="intro">
                <div className="intro-content">
                    <h2>De corazón a corazón</h2>
                        <div>
                            <a href="#track" className="btn-get-started scrollto">Monitorear</a>
                            <a href="https://www.teleton.org/" target="_blank" rel="noopener noreferrer" className="btn-projects scrollto">Donar</a>
                        </div>
                </div>
                <div id="intro-carousel" className="owl-carousel" >
                    <div className="item"></div>
                </div>
            </section>
        );
    }
}
export default Carousel;
