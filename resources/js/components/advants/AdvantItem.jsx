import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class AdvantItem extends Component {
    render(){

        const { img, title, descr } = this.props;
        
        return (
            <div className="advants__listItem col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="advants__listItemInner">
                    <div className="advants__listItemHeader">
                        <img src={ img } alt="" className="advants__listItemImg"/>
                    </div>
                    <div className="advants__listItemContent">
                        <div className="advants__listItemTitle">{ ReactHtmlParser(title) }</div>
                        <div className="advants__listItemExerpt">{ ReactHtmlParser(descr) }</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdvantItem;