import React, { Component } from 'react';

import Slidermain from '../SliderMain/Slidermain';
import Recommended from '../../containers/recommended/Recommended';
import Movietiphome from '../Movietiphome';
import Howitwork from '../howitwork/Howitwork';
import Advants from '../advants/Advants';

class HomePage extends Component {
    render(){
        return (
            <React.Fragment>
                <Slidermain/>

                <Recommended/>

                <Movietiphome/>

                <Howitwork/>

                <Advants/>
            </React.Fragment>
        );
    }
}

export default HomePage;