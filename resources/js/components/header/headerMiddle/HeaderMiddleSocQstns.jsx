import React, { Component } from 'react';
import HeaderMiddleSoc from './HeaderMiddleSoc';
import HeaderMiddleAsk from './HeaderMiddleAsk';

class HeaderMiddleSocQstns extends Component {
    render(){
        return (
            <div className="headerMiddle__socQstns">
                <HeaderMiddleSoc/>

                <HeaderMiddleAsk/>
            </div>
        );
    }
}

export default HeaderMiddleSocQstns;