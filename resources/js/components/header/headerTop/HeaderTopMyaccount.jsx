import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderTopMyaccount extends Component {
    render(){
        return (
            <div className="headerTop__myaccount">
                <Link to="my-account"
                      title="Войти/Регистрация"
                >
                    Войти/Регистрация<span></span>
                </Link>
            </div>
        );
    }
}

export default HeaderTopMyaccount;