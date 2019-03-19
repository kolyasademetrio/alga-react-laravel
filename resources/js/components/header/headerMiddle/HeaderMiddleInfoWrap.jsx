import React, { Component } from 'react';
import HeaderMiddleInfo from './HeaderMiddleInfo';
import HeaderMiddleSocQstns from './HeaderMiddleSocQstns';

class HeaderMiddleInfoWrap extends Component {
    render(){
        return (
            <div className="headerMiddle__infoWrap">
                <HeaderMiddleInfo/>

                <HeaderMiddleSocQstns/>
            </div>
        );
    }
}

export default HeaderMiddleInfoWrap;