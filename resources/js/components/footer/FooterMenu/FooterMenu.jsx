import React, { Component } from 'react';
import FooterMenuItem from './FooterMenuItem';
import footerMenuItems from '../../database/footer-menu-data';
import uniqueId from 'react-html-id';

class FooterMenu extends Component {

    state = {
        footerMenuItems: footerMenuItems,
    }

    constructor() {
        super();
        uniqueId.enableUniqueIds(this);
    }

    render(){
        return (
            <ul className="footer__menuList">
                {
                    this.state.footerMenuItems.map(footerMenuItem => (
                        <FooterMenuItem key={this.nextUniqueId()} {...footerMenuItem} />
                    ))
                }
            </ul>
        );
    }
}

export default FooterMenu;