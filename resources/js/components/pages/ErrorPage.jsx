import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render(){
        const imageStyles = {
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
        };

        return (
            <Link className="error-page-link" to="/" style={{display: 'block'}}>
                <img className="error-page-image"
                     src="./images/404.jpg"
                     alt="404 Page not found"
                     style={ imageStyles }
                />
            </Link>
        );
    }
}

export default ErrorPage;