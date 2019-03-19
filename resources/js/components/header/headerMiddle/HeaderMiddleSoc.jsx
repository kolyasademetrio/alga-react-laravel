import React, { Component } from 'react';

class HeaderMiddleSoc extends Component {
    render(){
        return (
            <div className="headerMiddle__soc">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src="uploads/2018/09/icons_v-05.png" alt="social"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src="uploads/2018/09/icons_v-06.png" alt="social"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img src="uploads/2018/09/icons_v-07.png" alt="social"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HeaderMiddleSoc;