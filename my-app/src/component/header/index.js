/*
Header component
This is a functional component
So... not a class and no lifecycle methods
*/

import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = (props) => {
    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;

