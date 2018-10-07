import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">
                        <i className="fa fa-envelope-o"></i> <a href="mailto:contact@example.com">contacto@teleton.org</a>
                        <i className="fa fa-phone"></i> 5321 2223
                    </div>
                    <div className="social-links float-right">
                    </div>
                </div>
            </section>
        );
    }
}
export default TopBar;
