import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterMenuItem extends Component {
    render(){
        const {title, link} = this.props;

        return (
            <li className="footer__menuItem">
                <Link to={ link } className="footer__menuItemLink">
                    { title }
                </Link>
            </li>
        );
    }
}

export default FooterMenuItem;