import React, { Component } from 'react';
import HeaderTopMenu from './HeaderTopMenu';
import HeaderTopSearch from './HeaderTopSearch';
import HeaderTopMyaccount from './HeaderTopMyaccount';
import HeaderTopCart from './HeaderTopCart';

class HeaderTop extends Component {
    render(){
        return (
            <div className="header__top">
                <div className="container headerTop__container">
                    <div className="row headerTop__row">
                        <div className="col-xs-12 headerTop__col">
                            <div className="headerTop__inner">
                                <HeaderTopMenu/>

                                <div className="headerTop__right">
                                    <HeaderTopSearch/>

                                    <HeaderTopMyaccount/>

                                    <HeaderTopCart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTop;