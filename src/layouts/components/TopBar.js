import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">
                        <i className="fa fa-envelope-o"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                        <i className="fa fa-phone"></i> +1 5589 55488 55
                </div>
                    <div className="social-links float-right">
                    </div>
                </div>
            </section>
        );
    }
}
export default TopBar;
