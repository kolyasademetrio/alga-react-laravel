import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderMiddleLogo extends Component {
    render(){
        return (
            <Link to="/"
                  className="headerMiddle__logo"
            >
                <div className="headerMiddle__logoLink">
                    <img src="uploads/2018/07/header_logo.png" alt="logo"
                         className="headerMiddle__img" />
                </div>

                <div className="headerMiddle__logoText">
                    <span>ALGA PH</span><br/>ЭКО КОСМЕТИКА<br/>ИЗ ИТАЛИИ
                </div>
            </Link>
        );
    }
}

export default HeaderMiddleLogo;