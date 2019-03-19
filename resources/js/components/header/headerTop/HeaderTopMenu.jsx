import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderTopMenu extends Component {
    render(){
        return (
            <div className="headerTop__menu">
                <ul className="headerTop__menuList">
                    <li className="headerTop__menuItem">
                        <NavLink activeClassName="active"
                                 className="headerTop__menuItemLink"
                                 to="/shipping"
                        >
                            Доставка и оплата
                        </NavLink>
                    </li>
                    <li className="headerTop__menuItem">
                        <NavLink activeClassName="active"
                                 className="headerTop__menuItemLink"
                                 to="/terms-cooperation"
                        >
                            Условия сотрудничества
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HeaderTopMenu;