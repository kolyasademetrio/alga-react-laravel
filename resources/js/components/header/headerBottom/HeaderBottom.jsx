import React, { Component } from 'react';
import HeaderBottomMenu from './headerBottomMenu/HeaderBottomMenu';

class HeaderBottom extends Component {
    render(){
        return (
            <div className="header__bottom">
                <div className="container headerMiddle__container">
                    <div className="row headerMiddle__row">
                        <div className="col-xs-12 headerMiddle__col">
                            <div className="headerMiddle__inner">

                                <HeaderBottomMenu/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBottom;