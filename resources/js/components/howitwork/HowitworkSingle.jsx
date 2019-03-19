import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class HowitworkSingle extends Component {
    render(){

        const { img, title, descr } = this.props;

        return (
            <div className="howitwork__item">
                <div className="howitwork__itemHeader">
                    <img src={ img } alt="" className="howitwork__itemImg"/>
                </div>
                <div className="howitwork__itemTitle">{ ReactHtmlParser(title) }</div>
                <div className="howitwork__itemDescr">{ ReactHtmlParser(descr) }</div>
            </div>
        );
    }
}

export default HowitworkSingle;