import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui inverted menu">
            <Link to="/" className="item">
                Zerobuger
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Portfolios
                </Link>
                <div className="item">
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
};

export default Header;