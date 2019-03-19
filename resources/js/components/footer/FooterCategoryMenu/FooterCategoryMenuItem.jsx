import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterCategoryMenuItem extends Component {
    render(){

        const { title, link } = this.props;

        return (
            <li className="footer__categoryItem">
                <Link to={ link } className="footer__categoryItemLink">
                    { title }
                </Link>
            </li>
        );
    }
}

export default FooterCategoryMenuItem;