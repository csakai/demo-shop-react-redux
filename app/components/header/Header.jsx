import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.scss';

const Header = () => (
    <div className={style.header}>
        <Link to="/">
            <h1 className={style.pageTitle}>
                Demo Shop
            </h1>
        </Link>
        <div className={style.cartButtonContainer}>
            <Link to="/cart">
                Go to Cart
            </Link>
        </div>
    </div>
);

export default Header;
