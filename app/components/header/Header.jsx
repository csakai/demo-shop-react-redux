import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <Link to="/">
            <h1 className="page-title">
                Demo Shop
            </h1>
        </Link>
        <div className="cart-button-container">
            <Link to="/cart">
                Go to Cart
            </Link>
        </div>
    </div>
);

export default Header;
