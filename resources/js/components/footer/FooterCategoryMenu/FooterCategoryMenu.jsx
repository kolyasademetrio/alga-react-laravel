import React, { Component } from 'react';
import footerCategoryItems from '../../database/footer-category-data';
import FooterCategoryMenuItem from '../FooterCategoryMenu/FooterCategoryMenuItem';
import uniqueId from 'react-html-id';

class FooterCategoryMenu extends Component {
    state = {
        footerCategoryItems: footerCategoryItems,
    }

    constructor() {
        super()
        uniqueId.enableUniqueIds(this);
    }

    render(){
        return (
            <ul className="footer__categoryList">
                {
                    this.state.footerCategoryItems.map(categoryItem => (
                        <FooterCategoryMenuItem key={this.nextUniqueId()} {...categoryItem} />
                    ))
                }
            </ul>
        );
    }
}

export default FooterCategoryMenu;