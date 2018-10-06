import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <section id="intro">
                <div className="intro-content">
                    <h2>De corazón a corazón</h2>
                        <div>
                            <a href="#about" className="btn-get-started scrollto">Doné</a>
                            <a href="#portfolio" className="btn-projects scrollto">Donar</a>
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
