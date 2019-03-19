import React, { Component } from 'react';
import HeaderTop from "./headerTop/HeaderTop";
import HeaderMiddle from "./headerMiddle/HeaderMiddle";
import HeaderBottom from "./headerBottom/HeaderBottom";

class Header extends Component {
    render(){
        return (
            <header className="header" id="header">
                <HeaderTop/>

                <HeaderMiddle/>

                <HeaderBottom/>
            </header>
        );
    }
}

export default Header;