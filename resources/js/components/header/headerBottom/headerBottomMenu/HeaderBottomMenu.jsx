import React, {Component} from 'react';
import HeaderBottomMenuItem from './HeaderBottomMenuItem';
import uniqueId from 'react-html-id';
//import headerMenuItems from '../../../database/header-menu-data';

class HeaderBottomMenu extends Component {

    constructor() {
        super();
        uniqueId.enableUniqueIds(this);
        this.state = {
            menuItems: [],
        }
    }

    componentWillMount(){
        let $this = this;

        axios.get('/api/pages')
            .then(response => {
            $this.setState({
                menuItems: response.data,
            });
        }).catch(error => {
            console.log(error);
        });
    }

    onClickAlert = (title) => {
        console.log( title );
    }

    render() {
        return (
            <div className="headerBottom__menu" id="headerBottom__menu">
                <ul className="headerBottom__menuList">
                    {
                        this.state.menuItems.map( headerMenuItem => (
                            <HeaderBottomMenuItem key={this.nextUniqueId()} {...headerMenuItem}
                                                  onHandler={this.onClickAlert}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default HeaderBottomMenu;