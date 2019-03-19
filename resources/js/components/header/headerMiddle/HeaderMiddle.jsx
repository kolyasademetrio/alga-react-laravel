import React, { Component } from 'react';
import HeaderMiddleLogo from './HeaderMiddleLogo';
import HeaderMiddlePoints from './HeaderMiddlePoints';
import HeaderMiddleInfoWrap from './HeaderMiddleInfoWrap';
import Humburger from '../../Humburger';

class HeaderMiddle extends Component {
    render(){
        return (
            <div className="header__middle">
                <Humburger/>
                <div className="container headerMiddle__container">
                    <div className="row headerMiddle__row">
                        <div className="col-xs-12 headerMiddle__col">
                            <div className="headerMiddle__inner">
                                <HeaderMiddleLogo/>

                                <HeaderMiddlePoints/>

                                <HeaderMiddleInfoWrap/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMiddle;