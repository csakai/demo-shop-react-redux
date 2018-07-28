import React from 'react';
import Header from './header/Header.jsx';
import Routes from '../routes.jsx';
import style from './style.scss';

const App = () =>
    <div className={style.rootApp}>
        <Header />
        { Routes }
    </div>;

export default App;
